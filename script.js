const products = [
    // BURGERS
    { id: 1, cat: 'burgers', name: "Mineirinho", price: 35.00, desc: "Mineirinho: pão selado na manteiga, burger grelhado de 140g, queijo provolone grelhado, doce de leite mineiro e bacon em cubos .", img: "img/mineirinho.jpg" },
    { id: 2, cat: 'burgers', name: "Clássico da Casa", price: 20.00, desc: "Clássico da casa: pão selado na manteiga, burger grelhado de 140g, mussarela, alface, tomate e molho especial.", img: "img/classicodacasa.jpg" },
    { id: 3, cat: 'burgers', name: "Bagunça da Casa", price: 30.00, desc: "Bagunça da casa: pão selado na manteiga, burger grelhado de 140g, mussarela, presunto, ovo, calabresa, bacon, milho, alface, tomate e molho especial .", img: "img/Bagunça da casa.jpg" },
    { id: 4, cat: 'burgers', name: "BBQ BACON", price: 32.00, desc: "BBQ Bacon: pão selado na manteiga, burger grelhado de 140g, Cheddar cremoso, Bacon, cebola caramelizada, barbecue, alface, tomate e molho especial .", img: "img/BBQ BACON.jpg" },
    { id: 5, cat: 'burgers', name: "Burger Picante", price: 26.00, desc: "Picante Burger: pão selado na manteiga, burger grelhado de 140g, mussarela, farofinha de bacon, molho Pepper, alface, tomate e molho especial .", img: "img/Burger picante.jpg" },
    { id: 6, cat: 'burgers', name: "Duplo Cheese", price: 40.00, desc: "Duplo Cheese: pão selado na manteiga, 2 burgers de 140g, 2x cheddar, 2x mussarela, alface, tomate e molho especial .", img: "img/Duplo Cheese.jpg" },
    { id: 7, cat: 'burgers', name: "Egg Burger", price: 23.00, desc: "EggBurger: pão selado na manteiga, burger grelhado de 140g, ovo, alface, tomate e molho especial.", img: "img/EggBurger.jpg"},
    { id: 8, cat: 'burgers', name: "Monster Burger", price: 45.00, desc: "Monster Burger: pão grande selado na manteiga, Burger grelhado de 200g, 2x mussarela, 2x presunto, 2 ovos, salsicha, calabresa, bacon, alface, tomate e molho especial .", img: "img/Monster Burger.jpg" },
    { id: 9, cat: 'burgers', name: "Nordestino", price: 37.00, desc: "Nordestino: pão selado na manteiga, burger grelhado de 140g, carne seca, creme de queijo e banana da terra .", img: "img/Nordestino.jpg"  },
    { id: 10, cat: 'burgers', name: "Tropical", price: 36.00, desc: "Tropical: pão selado na manteiga, burger grelhado de 140g, mussarela, abacaxi caramelizada no mel e alface", img: "img/tropicalfotonova.jpg" },
// ok

    // PORÇÕES
    { id: 21, cat: 'porcoes', name: "Batata Simples", price: 24.00, desc: "Porção de batata frita tradicional crocante.", img: "image/batatasimples.jpg" },
    { id: 22, cat: 'porcoes', name: "Batata com Calabresa", price: 28.00, desc: "Batata frita acompanhada de calabresa .", img: "img/batatacomcal.jpg" },
    { id: 23, cat: 'porcoes', name: "Batata Cheddar e Bacon", price: 30.00, desc: "Batata com muito cheddar e bacon crocante.", img: "image/Batata chedar e vacon.png" },
    { id: 24, cat: 'porcoes', name: "Batata com Queijo e Bacon", price: 32.00, desc: "A combinação perfeita de queijo e bacon crocante.", img: "img/imgbatatanova.jpg" },
    { id: 25, cat: 'porcoes', name: "Batata com Queijo e Calabresa", price: 32.00, desc: "Batata frita com queijo e porção de calabresa.", img: "image/Batata-Queijo-Calabresa.jpg" },
    { id: 26, cat: 'porcoes', name: "Batata Completa", price: 34.00, desc: "Cheddar, creme de queijo, bacon e calabresa.", img: "image/Cheddar, creme de queijo, bacon e calabresa. BATATA COMPLETA.jpg" },
    { id: 27, cat: 'porcoes', name: "Batata Cheddar/Bacon/Calabresa", price: 32.00, desc: "Combo completo de Batatas.", img: "image/Batata-Cheddar-Calabresa-Bacon.jpg" },
    { id: 28, cat: 'porcoes', name: "Batata com Cheddar", price: 26.00, desc: "Batata frita coberta com molho cheddar.", img: "image/batata-com-cheadar.jpg" },
    { id: 29, cat: 'porcoes', name: "Batata com Queijo ", price: 26.00, desc: "Batata frita coberta com queijo derretido.", img: "image/Batatafrita-cobertacom-queijo-derretido.jpg" },
    { id: 30, cat: 'porcoes', name: "Batata com Bacon", price: 28.00, desc: "Batata crocante com bacon frito.", img: "image/Batatafrita-crocante-com-cubosbacon.jpg" },
//ok

    // BEBIDAS
    { id: 41, cat: 'bebidas', name: "Coca-Cola Lata", price: 7.00, desc: "Lata geladíssima.", img: "image/cocalata.jpg" },
    { id: 42, cat: 'bebidas', name: "Coca Cola zero Lata", price: 7.00, desc: "Lata geladíssima.", img: "image/cocazerolata.jpg" },
    { id: 43, cat: 'bebidas', name: "Fanta Lata ", price: 7.00, desc: "Lata geladíssima.", img: "image/fantalata.jpg" },
    { id: 44, cat: 'bebidas', name: "Guaraná antártica Lata ", price: 7.00, desc: "Lata geladíssima.", img: "image/guaranalata.jpg" },
    { id: 45, cat: 'bebidas', name: "Coca Cola 1,5L", price: 13.00, desc: "Geladíssima.", img: "image/coca1,5.jpg" },
    { id: 46, cat: 'bebidas', name: "Coca Cola 2L", price: 15.00, desc: "Geladíssima.", img: "image/coca2l.jpg" },
    { id: 47, cat: 'bebidas', name: "Guaraná antártica 1L", price: 10.00, desc: "Geladíssimo.", img: "image/guarana1l.jpg" },
    { id: 48, cat: 'bebidas', name: "Guaraná antártica 2L", price: 15.00, desc: "Lata geladíssima.", img: "image/guarana2l.jpg" },

    // COMBOS
    { id: 19, cat: 'combos', name: "Combo duplo Clássico", price: 40.00, desc: "2 clássicos da casa + guaraná antártica de 1litro", img: "img/lanche com batata.jpg" },
    { id: 31, cat: 'combos', name: "Combo Família Clássico", price: 90.00, desc: "4 clássicos da casa + batata + guaraná antártica de 2 litros", img: "img/combo maior.jpg" },
    { id: 32, cat: 'combos', name: "Combo BBQ Duplo", price: 60.00, desc: "2 BBQ Bacon + guaraná antártica de 1litro ", img: "img/lanche com batata.jpg" },
    { id: 33, cat: 'combos', name: "Combo BBQ Família", price: 120.00, desc: "4 BBQ Bacon + batata + guaraná antártica de 2litros", img: "img/combo maior.jpg" },
    { id: 34, cat: 'combos', name: "Combo Egg Duplo", price: 45.00, desc: "2 EGG BURGER+guaraná antártica de 1litro ", img: "img/lanche com batata.jpg" },
    { id: 35, cat: 'combos', name: "Combo Egg Família", price: 100.00, desc: "4 EGG BURGER+batata+guaraná antártica de 2litros ", img: "img/combo maior.jpg" },
];
//ok
let cart = [];

function filterMenu(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === category) btn.classList.add('active');
if (category === 'todos' && btn.innerText.toLowerCase() === 'todos') btn.classList.add('active');
    });
// Acha o botão que tem o onclick com a categoria exata e taca o laranja nele
const activeBtn = document.querySelector(`button[onclick="filterMenu('${category}')"]`);
if (activeBtn) activeBtn.classList.add('active');
    
const container = document.getElementById('menu-container');
    let finalHtml = "";

    // Se for 'todos', vamos agrupar por categoria com títulos
    if (category === 'todos') {
        const sections = [
            { id: 'burgers', title: '🍔 Hambúrgueres' },
            { id: 'porcoes', title: '🍟 Porções' },
            { id: 'bebidas', title: '🥤 Bebidas' },
            { id: 'combos', title: '🎁 Combos' }
        ];

        sections.forEach(sec => {
            const filtered = products.filter(p => p.cat === sec.id);
            if (filtered.length > 0) {
                // Título da seção (estilizado para seu tema)
                finalHtml += `
                    <div class="col-span-full mt-10 mb-6">
                        <h2 class="text-3xl font-black italic uppercase text-orange-500 border-l-4 border-orange-600 pl-4">
                            ${sec.title}
                        </h2>
                    </div>
                `;
                // Cards da seção
                finalHtml += filtered.map(p => generateProductCard(p)).join('');
            }
        });
    } else {
        // Filtro normal por categoria única
        const filtered = products.filter(p => p.cat === category);
        finalHtml = filtered.map(p => generateProductCard(p)).join('');
    }

    container.innerHTML = finalHtml;
}

// Função para gerar o HTML do card (pra não repetir código)
function generateProductCard(p) {
    return `
        <div class="glass p-4 rounded-[2.5rem] group reveal">
            <div class="overflow-hidden rounded-[2rem] mb-6">
                <img src="${p.img}" class="w-full h-64 object-cover group-hover:scale-110 transition duration-700">
            </div>
            <div class="px-4 pb-4 flex flex-col h-[180px] text-left">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold uppercase italic">${p.name}</h3>
                    ${p.id < 5 ? '<span class="bg-orange-600/20 text-orange-500 text-[10px] px-2 py-1 rounded-full font-bold uppercase">Popular</span>' : ''}
                </div>
                <p class="text-zinc-500 text-xs mb-4 flex-grow">${p.desc}</p>
                <div class="flex justify-between items-center mt-auto">
                    <span class="text-2xl font-black italic">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                    <button onclick="add(${p.id})" class="bg-orange-600 hover:bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-orange-600/20">
                        <i class="fa-solid fa-plus text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function add(id) {
    const product = products.find(p => p.id === id);
    const exists = cart.find(i => i.id === id);
    if (exists) exists.qty++;
    else cart.push({ ...product, qty: 1 });
    updateUI();
    document.getElementById('cart-bar').classList.remove('hidden');
}

function updateUI() {
    const count = cart.reduce((acc, i) => acc + i.qty, 0);
    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    document.getElementById('cart-count-bubble').innerText = count;
    document.getElementById('cart-total-value').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('final-price').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    if (count === 0) document.getElementById('cart-bar').classList.add('hidden');
}

function openModal() {
    const list = document.getElementById('modal-items-list');
    if (cart.length === 0) return;
    list.innerHTML = cart.map((item, idx) => `
        <div class="flex justify-between items-center mb-4 bg-white/5 p-4 rounded-2xl">
            <div class="flex items-center gap-4">
                <img src="${item.img}" class="w-12 h-12 rounded-lg object-cover">
                <div>
                    <p class="font-bold text-sm uppercase">${item.name}</p>
                    <p class="text-xs text-orange-500">R$ ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <button onclick="change(${idx}, -1)" class="w-8 h-8 rounded-full border border-white/10 text-white">-</button>
                <span class="font-bold text-sm text-white">${item.qty}</span>
                <button onclick="change(${idx}, 1)" class="w-8 h-8 rounded-full bg-orange-600 text-white">+</button>
            </div>
        </div>
    `).join('');
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeModal() { document.getElementById('checkout-modal').classList.add('hidden'); }

function change(idx, delta) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateUI();
    openModal();
}

function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value;
    const addr = document.getElementById('cust-addr').value;
    const obs = document.getElementById('cust-phone').value;
    if (!name || !addr) {
        alert("Por favor, preencha nome e endereço!");
        return;
    }
    let msg = `* NOVO PEDIDO - NA GRELHA  `;
    if (obs) {
    msg += `*Obs:* ${obs}%0A`;}
    msg += `*Cliente:* ${name}%0A*Endereço:* ${addr}%0A%0A`;
    cart.forEach(i => msg += `• ${i.qty}x ${i.name} (R$ ${(i.price * i.qty).toFixed(2)})%0A`);
    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    msg += `%0A*TOTAL: R$ ${total.toFixed(2)}*`;
    window.open(`https://wa.me/556696565616?text=${msg}`, '_blank');
}

// Inicializa o cardápio
filterMenu('todos');