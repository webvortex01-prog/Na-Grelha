// PATCH.JS - Interceptador Dinâmico & Gestor de Promoções
// Totalmente otimizado para Mobile e Desktop no Na Grelha.

const originalFilterMenu = window.filterMenu;
const originalAdd = window.add;

// Obter os produtos originais e mesclar com as modificações do painel
function getPatchedProducts() {
    const edited = JSON.parse(localStorage.getItem('edited_products') || '{}');
    const added = JSON.parse(localStorage.getItem('added_products') || '[]');
    const deleted = JSON.parse(localStorage.getItem('deleted_products') || '[]');
    
    // Mescla o array original (acessível pelo escopo global) com as modificações
    let finalProducts = (typeof products !== 'undefined' ? products : []).map(p => {
        if (edited[p.id]) {
            return { ...p, ...edited[p.id] };
        }
        return p;
    }).filter(p => !deleted.includes(p.id.toString()));
    
    finalProducts = [...finalProducts, ...added];
    return finalProducts;
}

// Sobrescrevendo o design do card para a estética Premium + Suporte a Promoções
window.generateProductCard = function(p) {
    const isPopular = p.id < 5 ? '<span class="bg-orange-600/20 text-orange-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-orange-500/20 shadow-[0_0_10px_rgba(234,88,12,0.3)]">Popular</span>' : '';
    
    const hasPromo = p.isPromo && p.promoPrice && Number(p.promoPrice) > 0;
    const currentPrice = hasPromo ? Number(p.promoPrice) : Number(p.price);
    const originalPrice = hasPromo ? Number(p.price) : (p.originalPrice ? Number(p.originalPrice) : null);
    
    const formattedPrice = currentPrice.toFixed(2).replace('.', ',');

    let badgeHtml = isPopular;
    if (p.badge) {
        badgeHtml = `<span class="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(239,68,68,0.3)]">${p.badge}</span>`;
    } else if (hasPromo) {
        badgeHtml = `<span class="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(239,68,68,0.3)]">🔥 PROMO</span>`;
    }

    let priceHtml = '';
    if (originalPrice && originalPrice > currentPrice) {
        const origFormatted = originalPrice.toFixed(2).replace('.', ',');
        priceHtml = `
            <div class="flex flex-col">
                <span class="text-[10px] sm:text-[11px] text-zinc-500 line-through">De R$ ${origFormatted}</span>
                <span class="text-xl sm:text-2xl font-black text-orange-500 font-outfit drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]">R$ ${formattedPrice}</span>
            </div>
        `;
    } else {
        priceHtml = `
            <div class="flex flex-col">
                <span class="text-[9px] sm:text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Preço</span>
                <span class="text-xl sm:text-2xl font-black text-orange-500 font-outfit drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]">R$ ${formattedPrice}</span>
            </div>
        `;
    }
    
    return `
        <div class="glass-card p-4 rounded-[2rem] sm:rounded-[2.5rem] group reveal relative overflow-hidden flex flex-col h-full">
            <div class="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500 pointer-events-none"></div>
            
            <div class="overflow-hidden rounded-[1.8rem] mb-4 sm:mb-6 relative shadow-lg shrink-0">
                <img src="${p.img}" class="w-full h-52 sm:h-64 object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                ${hasPromo ? '<div class="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg">OFERTA</div>' : ''}
            </div>
            
            <div class="px-2 sm:px-4 pb-2 sm:pb-4 flex flex-col flex-grow text-left relative z-10">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl sm:text-2xl font-outfit font-bold uppercase text-white drop-shadow-md leading-tight">${p.name}</h3>
                    ${badgeHtml}
                </div>
                <p class="text-zinc-400 text-xs mb-4 flex-grow leading-relaxed">${p.desc || ''}</p>
                <div class="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                    ${priceHtml}
                    <button onclick="add('${p.id}')" class="bg-orange-600 hover:bg-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] hover:scale-110 active:scale-95 group/btn relative overflow-hidden shrink-0">
                        <i class="fa-solid fa-plus text-white text-lg sm:text-xl relative z-10 group-hover/btn:rotate-90 transition-transform duration-300"></i>
                        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    `;
};

// Sobrescrevendo a função original de filtro
window.filterMenu = function(category) {
    const allProducts = getPatchedProducts();
    
    // Remover classe ativa dos botões
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Marcar botão atual como ativo
    if (typeof event !== 'undefined' && event && event.currentTarget && event.currentTarget.classList) {
        event.currentTarget.classList.add('active');
    } else {
        const btn = document.querySelector(`button[onclick="filterMenu('${category}')"]`);
        if (btn) btn.classList.add('active');
    }

    const container = document.getElementById('menu-container');
    if (!container) return;

    let finalHtml = "";

    if (category === 'todos') {
        const sections = [
            { id: 'burgers', title: '🍔 Hambúrgueres' },
            { id: 'espetinhos', title: '🍢 Espetinhos' },
            { id: 'porcoes', title: '🍟 Porções' },
            { id: 'adicionais', title: '🧀 Adicionais' },
            { id: 'bebidas', title: '🥤 Bebidas' },
            { id: 'combos', title: '🎁 Combos' }
        ];

        sections.forEach(sec => {
            const filtered = allProducts.filter(p => p.cat === sec.id);
            if (filtered.length > 0) {
                finalHtml += `
                    <div class="col-span-full mt-8 sm:mt-10 mb-4 sm:mb-6">
                        <h2 class="text-2xl sm:text-3xl font-black italic uppercase text-orange-500 border-l-4 border-orange-600 pl-3 sm:pl-4">
                            ${sec.title}
                        </h2>
                    </div>
                `;
                finalHtml += filtered.map(window.generateProductCard).join('');
            }
        });
    } else {
        const filtered = allProducts.filter(p => p.cat === category);
        finalHtml = filtered.map(window.generateProductCard).join('');
    }

    container.innerHTML = finalHtml;
};

// Sobrescrevendo a função de adicionar ao carrinho para respeitar preços promocionais
window.add = function(id) {
    const allProducts = getPatchedProducts();
    const product = allProducts.find(p => p.id.toString() === id.toString());
    if (!product) return;
    
    if (product.cat === 'espetinhos') {
        window.pendingEspetoId = product.id;
        const modalTitle = document.getElementById('espeto-modal-title');
        if (modalTitle) modalTitle.innerText = product.name;
        
        const sabor2Container = document.getElementById('espeto-sabor-2-container');
        if (sabor2Container) {
            if (product.id.toString() === '503' || product.id.toString() === '504') {
                sabor2Container.classList.remove('hidden');
            } else {
                sabor2Container.classList.add('hidden');
            }
        }
        const espetoModal = document.getElementById('espeto-modal');
        if (espetoModal) espetoModal.classList.remove('hidden');
        return;
    }
    
    // Calcula o preço efetivo (com promoção caso exista)
    const effectivePrice = (product.isPromo && product.promoPrice && Number(product.promoPrice) > 0)
        ? Number(product.promoPrice)
        : Number(product.price);
    
    const productToAdd = { ...product, price: effectivePrice };

    if (typeof window.addToCart === 'function') {
        window.addToCart(productToAdd, false);
    } else {
        const exists = cart.find(i => i.id.toString() === id.toString());
        if (exists) {
            exists.qty++;
        } else {
            cart.push({ ...productToAdd, qty: 1 });
        }
        updateUI();
        const cartBar = document.getElementById('cart-bar');
        if (cartBar) {
            cartBar.classList.remove('hidden');
        }
    }
};

// Sobrescrevendo a confirmação do espetinho
window.confirmEspeto = function() {
    if (!window.pendingEspetoId) return;
    const allProducts = getPatchedProducts();
    const product = allProducts.find(p => p.id.toString() === window.pendingEspetoId.toString());
    if (!product) return;
    
    let flavor1 = document.getElementById('espeto-sabor-1').value;
    let flavorStr = flavor1;
    
    if (product.id.toString() === '503' || product.id.toString() === '504') {
        let flavor2 = document.getElementById('espeto-sabor-2').value;
        flavorStr = `${flavor1} e ${flavor2}`;
    }
    
    const effectivePrice = (product.isPromo && product.promoPrice && Number(product.promoPrice) > 0)
        ? Number(product.promoPrice)
        : Number(product.price);

    const cartItem = { 
        ...product, 
        price: effectivePrice,
        cartId: `${product.id}-${flavorStr}`,
        name: `${product.name} (${flavorStr})`
    };
    
    if (typeof window.addToCart === 'function') {
        window.addToCart(cartItem, true);
    } else {
        const exists = cart.find(i => i.cartId === cartItem.cartId);
        if (exists) {
            exists.qty++;
        } else {
            cart.push({ ...cartItem, qty: 1 });
        }
        updateUI();
        const cartBar = document.getElementById('cart-bar');
        if (cartBar) cartBar.classList.remove('hidden');
    }
    
    if (typeof window.closeEspetoModal === 'function') {
        window.closeEspetoModal();
    } else {
        document.getElementById('espeto-modal').classList.add('hidden');
    }
};

// ========================================================
// SISTEMA DA PROMOÇÃO DO DIA & POP-UP GIGANTE (MOBILE FIRST)
// ========================================================
function initDailyPromo() {
    const promoData = localStorage.getItem('daily_promo');
    if (!promoData) return;

    let promo;
    try {
        promo = JSON.parse(promoData);
    } catch (e) {
        return;
    }

    const existingModal = document.getElementById('daily-promo-modal');
    const existingFloatBtn = document.getElementById('daily-promo-float-btn');

    // Se a promoção não estiver ativa, remove pop-up e botão flutuante
    if (!promo || !promo.active) {
        if (existingModal) existingModal.remove();
        if (existingFloatBtn) existingFloatBtn.remove();
        return;
    }

    const oldPrice = Number(promo.originalPrice || 0);
    const newPrice = Number(promo.promoPrice || promo.price || 0);
    const formattedNewPrice = newPrice.toFixed(2).replace('.', ',');

    let discountBadgeHtml = '';
    if (oldPrice > newPrice && oldPrice > 0) {
        const pct = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
        discountBadgeHtml = `
            <div class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-[11px] sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl uppercase tracking-wider shadow-lg shadow-red-600/40">
                -${pct}% OFF
            </div>
        `;
    }

    let oldPriceHtml = '';
    if (oldPrice > 0) {
        oldPriceHtml = `
            <div class="flex flex-col">
                <span class="text-[9px] sm:text-xs text-zinc-500 uppercase font-bold tracking-wider">De:</span>
                <span class="text-xs sm:text-base text-zinc-400 line-through">R$ ${oldPrice.toFixed(2).replace('.', ',')}</span>
            </div>
        `;
    }

    const badgeText = promo.badge || "🔥 OFERTA DO DIA EXCLUSIVA";
    const btnText = promo.buttonText || "GARANTIR ESSA OFERTA AGORA! 🔥";

    // 1. Criar ou atualizar o Modal Gigante Mobile-Optimized
    let modal = existingModal;
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'daily-promo-modal';
        document.body.appendChild(modal);
    }

    modal.className = "fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-xl transition-all duration-300";
    modal.style.webkitOverflowScrolling = "touch";
    modal.innerHTML = `
        <div class="relative w-full max-w-lg sm:max-w-2xl bg-zinc-950/95 border-2 border-orange-500/50 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 shadow-[0_0_80px_rgba(234,88,12,0.45)] max-h-[88vh] overflow-y-auto text-left my-auto">
            
            <!-- Glows e efeitos visuais -->
            <div class="absolute -top-24 -right-24 w-60 h-60 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-60 h-60 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Botão Fechar Touch Friendly -->
            <button onclick="closeDailyPromoModal()" class="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 active:bg-orange-600 text-zinc-400 hover:text-white flex items-center justify-center text-lg transition duration-300 z-30">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- Selo Superior Flutuante -->
            <div class="text-center mb-3 sm:mb-5 relative z-10 pr-8 sm:pr-0">
                <span class="inline-block bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white text-[10px] sm:text-xs font-black uppercase px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full tracking-widest shadow-[0_0_20px_rgba(234,88,12,0.5)] animate-pulse">
                    ${badgeText}
                </span>
            </div>

            <!-- Foto Gigante da Promoção -->
            <div class="relative w-full h-44 sm:h-64 rounded-2xl sm:rounded-[2rem] overflow-hidden mb-4 sm:mb-6 bg-zinc-900 border border-white/10 shadow-2xl">
                <img src="${promo.img || 'img/comboduplocerto.jpg'}" alt="${promo.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                ${discountBadgeHtml}
            </div>

            <!-- Título e Descrição da Oferta -->
            <div class="space-y-2 sm:space-y-3 relative z-10">
                <h2 class="font-outfit text-xl sm:text-3xl font-black uppercase text-white leading-tight drop-shadow-md">
                    ${promo.title}
                </h2>
                <p class="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                    ${promo.desc}
                </p>
            </div>

            <!-- Destaque de Preço -->
            <div class="my-4 sm:my-6 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between relative z-10">
                ${oldPriceHtml}
                <div class="text-right">
                    <span class="text-[9px] sm:text-xs uppercase text-orange-500 font-bold tracking-widest block">Por Apenas:</span>
                    <span class="font-outfit text-2xl sm:text-4xl font-black text-orange-500 txt-fogo leading-none">
                        R$ ${formattedNewPrice}
                    </span>
                </div>
            </div>

            <!-- Botões de Ação Mobile Friendly -->
            <div class="space-y-2.5 sm:space-y-3 relative z-10">
                <button onclick="acceptDailyPromo()" class="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-black uppercase text-xs sm:text-sm py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all shadow-[0_0_30px_rgba(234,88,12,0.5)] active:scale-95 flex items-center justify-center gap-2 sm:gap-3">
                    <i class="fa-solid fa-fire text-base sm:text-xl"></i>
                    <span>${btnText}</span>
                </button>

                <button onclick="closeDailyPromoModal()" class="w-full py-2 text-[11px] sm:text-xs text-zinc-500 hover:text-zinc-300 font-semibold uppercase tracking-wider transition text-center">
                    Não, quero apenas ver o cardápio
                </button>
            </div>

        </div>
    `;

    // 2. Criar ou atualizar o Botão Flutuante (Floating Pill)
    let floatBtn = existingFloatBtn;
    if (!floatBtn) {
        floatBtn = document.createElement('div');
        floatBtn.id = 'daily-promo-float-btn';
        document.body.appendChild(floatBtn);
    }

    // Posicionado no canto inferior direito, acima do cart-bar quando exibido
    floatBtn.className = "fixed bottom-24 right-3 sm:right-6 z-40";
    floatBtn.innerHTML = `
        <button onclick="openDailyPromoModal()" class="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(234,88,12,0.6)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
            <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
            <i class="fa-solid fa-fire text-xs sm:text-sm text-yellow-300"></i>
            <span class="hidden sm:inline">Oferta do Dia:</span>
            <span>R$ ${formattedNewPrice}</span>
        </button>
    `;

    // 3. Exibir o Pop-up Gigante se ainda não foi fechado nesta navegação
    const promoClosedInSession = sessionStorage.getItem('nagrelha_promo_closed');
    if (!promoClosedInSession) {
        setTimeout(() => {
            openDailyPromoModal();
        }, 600);
    }
}

window.openDailyPromoModal = function() {
    const modal = document.getElementById('daily-promo-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
};

window.closeDailyPromoModal = function() {
    const modal = document.getElementById('daily-promo-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        sessionStorage.setItem('nagrelha_promo_closed', 'true');
    }
};

window.acceptDailyPromo = function() {
    const promoData = localStorage.getItem('daily_promo');
    if (!promoData) return;
    const promo = JSON.parse(promoData);

    const price = Number(promo.promoPrice || promo.price || 0);
    const promoItem = {
        id: promo.productId ? 'promo_' + promo.productId : 'daily_promo_' + Date.now(),
        name: promo.title,
        price: price,
        desc: promo.desc,
        img: promo.img || 'img/comboduplocerto.jpg',
        qty: 1
    };

    // Adiciona ao carrinho
    const exists = cart.find(i => i.id === promoItem.id || i.name === promoItem.name);
    if (exists) {
        exists.qty++;
    } else {
        cart.push(promoItem);
    }

    updateUI();
    const cartBar = document.getElementById('cart-bar');
    if (cartBar) cartBar.classList.remove('hidden');

    window.closeDailyPromoModal();

    // Notificação e abre o modal do pedido para checkout
    if (typeof window.openModal === 'function') {
        window.openModal();
    }
};

// ========================================================
// SINCRONIZAÇÃO EM TEMPO REAL & EVENTOS COM FIREBASE FIRESTORE
// ========================================================
function syncFromFirestore() {
    if (!window.firestoreDb) {
        setTimeout(syncFromFirestore, 100);
        return;
    }

    // 1. Ouvir a Promoção do Dia em tempo real na nuvem
    window.firestoreDb.collection('config').doc('daily_promo').onSnapshot((doc) => {
        if (doc.exists) {
            const promo = doc.data();
            localStorage.setItem('daily_promo', JSON.stringify(promo));
            initDailyPromo();
        }
    }, (err) => console.warn('Aviso Firebase Promoção:', err));

    // 2. Ouvir alterações de cardápio e preços em tempo real na nuvem
    window.firestoreDb.collection('config').doc('products').onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();
            if (data.edited) localStorage.setItem('edited_products', JSON.stringify(data.edited));
            if (data.added) localStorage.setItem('added_products', JSON.stringify(data.added));
            if (data.deleted) localStorage.setItem('deleted_products', JSON.stringify(data.deleted));

            const activeBtn = document.querySelector('.filter-btn.active');
            if (activeBtn) {
                const onclickAttr = activeBtn.getAttribute('onclick');
                const match = onclickAttr ? onclickAttr.match(/'([^']+)'/) : null;
                if (match) filterMenu(match[1]);
                else filterMenu('todos');
            } else {
                filterMenu('todos');
            }
        }
    }, (err) => console.warn('Aviso Firebase Produtos:', err));
}

// Inicializa escuta em nuvem
syncFromFirestore();

window.addEventListener('storage', () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) {
        const onclickAttr = activeBtn.getAttribute('onclick');
        const match = onclickAttr ? onclickAttr.match(/'([^']+)'/) : null;
        if (match) filterMenu(match[1]);
        else filterMenu('todos');
    } else {
        filterMenu('todos');
    }

    // Atualiza a Promoção do Dia em tempo real
    initDailyPromo();
});

// Inicialização imediata com os dados aplicados
setTimeout(() => {
    filterMenu('todos');
    initDailyPromo();
}, 60);

// Envio para WhatsApp + Registro na Nuvem
window.sendToWhatsApp = function() {
    const name = document.getElementById('cust-name').value;
    const addr = document.getElementById('cust-addr').value;
    const obs = document.getElementById('cust-phone').value;
    
    if (!name || !addr) {
        alert("Por favor, preencha nome e endereço!");
        return;
    }

    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    const orderItems = cart.map(i => ({ 
        name: i.name, 
        quantity: i.qty, 
        price: i.price, 
        productId: i.id 
    }));

    // Salvar pedido no localStorage e na Nuvem Firestore
    const orders = JSON.parse(localStorage.getItem('nagrelha_orders') || '[]');
    const newOrder = {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer: { name, address: addr, obs },
        items: orderItems,
        summary: { total },
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    localStorage.setItem('nagrelha_orders', JSON.stringify(orders));

    if (window.firestoreDb) {
        window.firestoreDb.collection('orders').add(newOrder).catch(e => console.warn('Erro ao salvar pedido na nuvem:', e));
    }
    
    window.dispatchEvent(new Event('storage'));

    // Mensagem WhatsApp
    let msg = `* NOVO PEDIDO - NA GRELHA  `;
    if (obs) {
        msg += `*Obs:* ${obs}%0A`;
    }
    msg += `*Cliente:* ${name}%0A*Endereço:* ${addr}%0A%0A`;
    cart.forEach(i => msg += `• ${i.qty}x ${i.name} (R$ ${(i.price * i.qty).toFixed(2)})%0A`);
    msg += `%0A*TOTAL: R$ ${total.toFixed(2)}*`;

    document.getElementById('checkout-modal').classList.add('hidden');
    const warningModal = document.getElementById('whatsapp-warning-modal');
    warningModal.classList.remove('hidden');

    const btn = document.getElementById('btn-go-whatsapp');
    btn.onclick = () => {
        warningModal.classList.add('hidden');
        cart = [];
        updateUI();
        window.open(`https://wa.me/556696565616?text=${msg}`, '_blank');
    };
};
