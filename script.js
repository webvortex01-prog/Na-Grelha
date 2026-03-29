const products = [
    // BURGERS
    { id: 1, cat: 'burgers', name: "Mineirinho", price: 35.00, desc: "Mineirinho: pão selado na manteiga, burger grelhado de 140g, queijo provolone grelhado, doce de leite mineiro e bacon em cubos .", img: "img/mineirinho.jpg" },
    { id: 2, cat: 'burgers', name: "Clássico da Casa", price: 20.00, desc: "Clássico da casa: pão selado na manteiga, burger grelhado de 140g, mussarela, alface, tomate e molho especial.", img: "img/classicodacasa.jpg" },
    { id: 3, cat: 'burgers', name: "Bagunça da Casa", price: 30.00, desc: "Bagunça da casa: pão selado na manteiga, burger grelhado de 140g, mussarela, presunto, ovo, calabresa, bacon, milho, alface, tomate e molho especial .", img: "img/Bagunça da casa.jpg" },
    { id: 4, cat: 'burgers', name: "BBQ BACON", price: 32.00, desc: "Dois blends de 180g, ovo frito, bacon, picles e molho especial.", img: "img/BBQ BACON.jpg" },
    { id: 5, cat: 'burgers', name: "Burger Picante", price: 26.00, desc: "Picante Burger: pão selado na manteiga, burger grelhado de 140g, mussarela, farofinha de bacon, molho Pepper, alface, tomate e molho especial .", img: "img/Burger picante.jpg" },
    { id: 6, cat: 'burgers', name: "Duplo Cheese", price: 40.00, desc: "Duplo Cheese: pão selado na manteiga, 2 burgers de 140g, 2x cheddar, 2x mussarela, alface, tomate e molho especial .", img: "img/Duplo Cheese.jpg" },
    { id: 7, cat: 'burgers', name: "Egg Burger", price: 23.00, desc: "EggBurger: pão selado na manteiga, burger grelhado de 140g, ovo, alface, tomate e molho especial.", img: "img/EggBurger.jpg"},
    { id: 8, cat: 'burgers', name: "Monster Burger", price: 45.00, desc: "Monster Burger: pão grande selado na manteiga, Burger grelhado de 200g, 2x mussarela, 2x presunto, 2 ovos, salsicha, calabresa, bacon, alface, tomate e molho especial .", img: "img/Monster Burger.jpg" },
    { id: 9, cat: 'burgers', name: "Nordestino", price: 37.00, desc: "Nordestino: pão selado na manteiga, burger grelhado de 140g, carne seca, creme de queijo e banana da terra .", img: "img/Nordestino.jpg"  },
    { id: 10, cat: 'burgers', name: "Tropical", price: 36.00, desc: "Tropical: pão selado na manteiga, burger grelhado de 140g, mussarela, abacaxi caramelizada no mel e alface", img: "img/tropical.jpg" },

    // PORÇÕES
    { id: 11, cat: 'porcoes', name: "Porção de Batatas", price: 22.00, desc: "Batatas rústicas fritas com alecrim e páprica defumada.", img: "img/porções.jpg" },
    { id: 12, cat: 'porcoes', name: "Batata com calabresa", price: 26.00, desc: "Batata crocante com calabresa frita e molho da casa.", img: "img/batata com calabresa.jpg" },
    { id: 13, cat: 'porcoes', name: "Onion Rings", price: 19.00, desc: "Anéis de cebola gigantes empanados na cerveja.", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=400" },
    { id: 14, cat: 'porcoes', name: "Batata Cheddar/Bacon", price: 28.00, desc: "Batata palito com muito cheddar cremoso e farofa de bacon.", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=400" },
// NOVAS PORÇÕES (Baseadas na imagem)
{ id: 21, cat: 'porcoes', name: "Batata Simples", price: 24.00, desc: "Porção de batata frita tradicional crocante." },
{ id: 22, cat: 'porcoes', name: "Batata com Calabresa", price: 28.00, desc: "Batata frita acompanhada de calabresa acebolada." },
{ id: 23, cat: 'porcoes', name: "Batata com Queijo", price: 26.00, desc: "Batata frita coberta com queijo derretido." },
{ id: 24, cat: 'porcoes', name: "Batata com Bacon", price: 28.00, desc: "Batata frita crocante com cubos de bacon." },
{ id: 25, cat: 'porcoes', name: "Batata com Cheddar", price: 26.00, desc: "Batata frita com o legítimo molho cheddar." },
{ id: 26, cat: 'porcoes', name: "Batata com Queijo e Bacon", price: 32.00, desc: "A combinação perfeita de queijo e bacon crocante." },
{ id: 27, cat: 'porcoes', name: "Batata com Queijo e Calabresa", price: 32.00, desc: "Batata frita com queijo e porção de calabresa." },
{ id: 28, cat: 'porcoes', name: "Batata Completa", price: 34.00, desc: "Cheddar, creme de queijo, bacon e calabresa." },
{ id: 29, cat: 'porcoes', name: "Batata Cheddar e Bacon (500g)", price: 30.00, desc: "Porção generosa de 500g com cheddar e bacon." },
{ id: 30, cat: 'porcoes', name: "Batata Cheddar, Calabresa e Bacon (500g)", price: 32.00, desc: "Combo completo de 500g para compartilhar." },


    // BEBIDAS
    { id: 18, cat: 'bebidas', name: "Coca-Cola 350ml", price: 7.50, desc: "Lata geladíssima.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400" },


    // COMBOS
    { id: 19, cat: 'combos', name: "Combo casal", price: 40.00, desc: "2 clássicos da casa + guaraná antártica de 1litro", img: "img/lanche com batata.jpg" },
    { id: 20, cat: 'combos', name: "Combo Família", price: 60.00, desc: "4 clássicosdacasa+ batata + guaraná antártica de 2 litros", img: "img/combo maior.jpg" },
    { id: 20, cat: 'combos', name: "Combo BBQ Casal", price: 60.00, desc: "2 BBQ Bacon + guaraná antártica de 1litro ", img: "img/lanche com batata.jpg" },
    { id: 20, cat: 'combos', name: "Combo BBQ Família", price: 60.00, desc: "4 BBQ Bacon + batata + guaraná antártica de 2litros", img: "img/combo maior.jpg" },
    { id: 20, cat: 'combos', name: "Combo Egg", price: 45.00, desc: "2 EGG BURGER+guaraná antártica de 1litro ", img: "img/lanche com batata.jpg" },
    { id: 20, cat: 'combos', name: "Combo Egg Família", price: 100.00, desc: "4 EGG BURGER+batata+guaraná antártica de 2litros ", img: "img/combo maior.jpg" },

];

let cart = [];

function filterMenu(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === category) btn.classList.add('active');
        if (category === 'todos' && btn.innerText.toLowerCase() === 'todos') btn.classList.add('active');
    });

    const container = document.getElementById('menu-container');
    const filtered = category === 'todos' ? products : products.filter(p => p.cat === category);

    container.innerHTML = filtered.map(p => `
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
    `).join('');
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
    if (!name || !addr) {
        alert("Por favor, preencha nome e endereço!");
        return;
    }
    let msg = `*🤴 NOVO PEDIDO - NA GRELHA*%0A%0A`;
    msg += `*Cliente:* ${name}%0A*Endereço:* ${addr}%0A%0A`;
    cart.forEach(i => msg += `• ${i.qty}x ${i.name} (R$ ${(i.price * i.qty).toFixed(2)})%0A`);
    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    msg += `%0A*TOTAL: R$ ${total.toFixed(2)}*`;
    window.open(`https://wa.me/5566999373778?text=${msg}`, '_blank');
}

// Inicializa o cardápio
filterMenu('todos');