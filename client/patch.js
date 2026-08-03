// PATCH.JS - Interceptador Dinâmico
// Este arquivo sobrepõe o comportamento do script.js original SEM modificá-lo.
// Ele lê as edições/exclusões/adições do localStorage (Painel do CEO) e mescla
// com o array "products" fixo do script.js.

const originalFilterMenu = window.filterMenu;
const originalAdd = window.add;

// Obter os produtos originais e mesclar com as modificações do painel
function getPatchedProducts() {
    const edited = JSON.parse(localStorage.getItem('edited_products') || '{}');
    const added = JSON.parse(localStorage.getItem('added_products') || '[]');
    const deleted = JSON.parse(localStorage.getItem('deleted_products') || '[]');
    
    // Mescla o array original (acessível pelo escopo global) com as modificações
    let finalProducts = products.map(p => {
        if (edited[p.id]) {
            return { ...p, ...edited[p.id] };
        }
        return p;
    }).filter(p => !deleted.includes(p.id.toString()));
    
    finalProducts = [...finalProducts, ...added];
    return finalProducts;
}

// Sobrescrevendo o design do card para a estética Premium (sem mexer no script original)
window.generateProductCard = function(p) {
    const isPopular = p.id < 5 ? '<span class="bg-orange-600/20 text-orange-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-orange-500/20 shadow-[0_0_10px_rgba(234,88,12,0.3)]">Popular</span>' : '';
    const formattedPrice = typeof p.price === 'number' ? p.price.toFixed(2).replace('.', ',') : p.price;
    
    return `
        <div class="glass-card p-4 rounded-[2.5rem] group reveal relative overflow-hidden flex flex-col h-full">
            <div class="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500 pointer-events-none"></div>
            
            <div class="overflow-hidden rounded-[2rem] mb-6 relative shadow-lg shrink-0">
                <img src="${p.img}" class="w-full h-64 object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div class="px-4 pb-4 flex flex-col flex-grow text-left relative z-10">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-2xl font-outfit font-bold uppercase text-white drop-shadow-md leading-tight">${p.name}</h3>
                    ${isPopular}
                </div>
                <p class="text-zinc-400 text-xs mb-4 flex-grow leading-relaxed">${p.desc}</p>
                <div class="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                    <div class="flex flex-col">
                        <span class="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Preço</span>
                        <span class="text-2xl font-black text-orange-500 font-outfit drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]">R$ ${formattedPrice}</span>
                    </div>
                    <button onclick="add('${p.id}')" class="bg-orange-600 hover:bg-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] hover:scale-110 active:scale-95 group/btn relative overflow-hidden">
                        <i class="fa-solid fa-plus text-white text-xl relative z-10 group-hover/btn:rotate-90 transition-transform duration-300"></i>
                        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    `;
}

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
                    <div class="col-span-full mt-10 mb-6">
                        <h2 class="text-3xl font-black italic uppercase text-orange-500 border-l-4 border-orange-600 pl-4">
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
}

// Sobrescrevendo a função original de adicionar ao carrinho
window.add = function(id) {
    const allProducts = getPatchedProducts();
    const product = allProducts.find(p => p.id.toString() === id.toString());
    
    if (product.cat === 'espetinhos') {
        window.pendingEspetoId = product.id;
        document.getElementById('espeto-modal-title').innerText = product.name;
        if (product.id.toString() === '503' || product.id.toString() === '504') {
            document.getElementById('espeto-sabor-2-container').classList.remove('hidden');
        } else {
            document.getElementById('espeto-sabor-2-container').classList.add('hidden');
        }
        document.getElementById('espeto-modal').classList.remove('hidden');
        return;
    }
    
    // Lógica normal 
    if (typeof window.addToCart === 'function') {
        window.addToCart(product, false);
    } else {
        const exists = cart.find(i => i.id.toString() === id.toString());
        if (exists) {
            exists.qty++;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        updateUI(); // Função original do script.js
        const cartBar = document.getElementById('cart-bar');
        if (cartBar) {
            cartBar.classList.remove('hidden');
        }
    }
}

// Sobrescrevendo a função de confirmação para ler do patchedProducts
window.confirmEspeto = function() {
    if (!window.pendingEspetoId) return;
    const allProducts = getPatchedProducts();
    const product = allProducts.find(p => p.id.toString() === window.pendingEspetoId.toString());
    
    let flavor1 = document.getElementById('espeto-sabor-1').value;
    let flavorStr = flavor1;
    
    if (product.id.toString() === '503' || product.id.toString() === '504') {
        let flavor2 = document.getElementById('espeto-sabor-2').value;
        flavorStr = `${flavor1} e ${flavor2}`;
    }
    
    const cartItem = { 
        ...product, 
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
        document.getElementById('cart-bar').classList.remove('hidden');
    }
    
    window.closeEspetoModal();
}

// Ouvinte para auto-refresh caso o CEO edite enquanto a aba do cliente está aberta
window.addEventListener('storage', () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) {
        const onclickAttr = activeBtn.getAttribute('onclick');
        const match = onclickAttr.match(/'([^']+)'/);
        if(match) filterMenu(match[1]);
    } else {
        filterMenu('todos');
    }
});

// Força a renderização inicial com os dados do painel aplicados
setTimeout(() => {
    filterMenu('todos');
}, 50);

// Sobrescreve o envio para o WhatsApp
window.sendToWhatsApp = function() {
    const name = document.getElementById('cust-name').value;
    const addr = document.getElementById('cust-addr').value;
    const obs = document.getElementById('cust-phone').value;
    
    if (!name || !addr) {
        alert("Por favor, preencha nome e endereço!");
        return;
    }

    // 1. Calcular totais e criar itens do pedido
    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    const orderItems = cart.map(i => ({ 
        name: i.name, 
        quantity: i.qty, 
        price: i.price, 
        productId: i.id 
    }));

    // 2. Salvar pedido no localStorage (Dashboard do CEO)
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
    
    // Dispara evento para caso a aba do CEO esteja aberta no mesmo navegador
    window.dispatchEvent(new Event('storage'));

    // 3. Preparar mensagem do WhatsApp
    let msg = `* NOVO PEDIDO - NA GRELHA  `;
    if (obs) {
        msg += `*Obs:* ${obs}%0A`;
    }
    msg += `*Cliente:* ${name}%0A*Endereço:* ${addr}%0A%0A`;
    cart.forEach(i => msg += `• ${i.qty}x ${i.name} (R$ ${(i.price * i.qty).toFixed(2)})%0A`);
    msg += `%0A*TOTAL: R$ ${total.toFixed(2)}*`;

    // 4. Fechar modal de checkout e mostrar modal de aviso
    document.getElementById('checkout-modal').classList.add('hidden');
    const warningModal = document.getElementById('whatsapp-warning-modal');
    warningModal.classList.remove('hidden');

    // 5. Configurar botão de "Ir para WhatsApp" no modal de aviso
    const btn = document.getElementById('btn-go-whatsapp');
    btn.onclick = () => {
        warningModal.classList.add('hidden');
        cart = []; // Limpa carrinho
        updateUI(); // Atualiza a UI para zerar os valores
        window.open(`https://wa.me/556696565616?text=${msg}`, '_blank');
    };
};
