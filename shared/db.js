/**
 * Local Database Mock para "Na Grelha"
 * Utiliza o localStorage para persistir dados localmente e
 * o evento 'storage' para simular atualizações em tempo real
 * entre as abas do Client e do Admin.
 */

// Chaves do LocalStorage
const DB_KEYS = {
    ORDERS: 'nagrelha_orders',
    PRODUCTS: 'nagrelha_products',
    METRICS: 'nagrelha_metrics'
};

// Dados Iniciais (Mock)
const defaultProducts = [
    // BURGERS
    { id: 1, cat: 'burgers', name: "Mineirinho", price: 35.00, desc: "Mineirinho: pão selado na manteiga, burger grelhado de 140g, queijo provolone grelhado, doce de leite mineiro e bacon em cubos .", img: "img/mineirinho.jpg" },
    { id: 2, cat: 'burgers', name: "Clássico da Casa", price: 20.00, desc: "Clássico da casa: pão selado na manteiga, burger grelhado de 140g, mussarela, alface, tomate e molho especial.", img: "img/classicodacasa.jpg" },
    { id: 3, cat: 'burgers', name: "Bagunça da Casa", price: 30.00, desc: "Bagunça da casa: pão selado na manteiga, burger grelhado de 140g, mussarela, presunto, ovo, calabresa, bacon, milho, alface, tomate e molho especial .", img: "img/Bagunça da casa.jpg" },
    { id: 4, cat: 'burgers', name: "BBQ BACON", price: 32.00, desc: "BBQ Bacon: pão selado na manteiga, burger grelhado de 140g, Cheddar cremoso, Bacon, cebola caramelizada, barbecue, alface, tomate e molho especial .", img: "img/BBQ BACON.jpg" },
    { id: 5, cat: 'burgers', name: "Burger Picante", price: 26.00, desc: "Picante Burger: pão selado na manteiga, burger grelhado de 140g, mussarela, farofinha de bacon, molho Pepper, alface, tomate e molho especial .", img: "img/Burger picante.jpg" },
    { id: 6, cat: 'burgers', name: "Duplo Cheese", price: 40.00, desc: "Duplo Cheese: pão selado na manteiga, 2 burgers de 140g, 2x cheddar, 2x mussarela, alface, tomate e molho especial .", img: "img/Duplo Cheese.jpg" },
    { id: 7, cat: 'burgers', name: "Egg Burger", price: 23.00, desc: "EggBurger: pão selado na manteiga, burger grelhado de 140g, ovo, alface, tomate e molho especial.", img: "img/EggBurger.jpg" },
    { id: 8, cat: 'burgers', name: "Monster Burger", price: 45.00, desc: "Monster Burger: pão grande selado na manteiga, Burger grelhado de 200g, 2x mussarela, 2x presunto, 2 ovos, salsicha, calabresa, bacon, alface, tomate e molho especial .", img: "img/Monster Burger.jpg" },
    { id: 9, cat: 'burgers', name: "Nordestino", price: 37.00, desc: "Nordestino: pão selado na manteiga, burger grelhado de 140g, carne seca, creme de queijo e banana da terra .", img: "img/Nordestino.jpg" },
    { id: 10, cat: 'burgers', name: "Tropical", price: 36.00, desc: "Tropical: pão selado na manteiga, burger grelhado de 140g, mussarela, abacaxi caramelizada no mel e alface", img: "img/tropicalfotonova.jpg" },

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

    // BEBIDAS
    { id: 41, cat: 'bebidas', name: "Coca-Cola Lata", price: 7.00, desc: "", img: "image/cocalata.jpg" },
    { id: 42, cat: 'bebidas', name: "Coca Cola zero Lata", price: 7.00, desc: "", img: "image/cocazerolata.jpg" },
    { id: 43, cat: 'bebidas', name: "Fanta Lata ", price: 7.00, desc: " ", img: "image/fantalata.jpg" },
    { id: 44, cat: 'bebidas', name: "Guaraná antártica Lata ", price: 7.00, desc: " ", img: "image/guaranalata.jpg" },
    { id: 45, cat: 'bebidas', name: "Coca Cola 1,5L", price: 13.00, desc: "", img: "image/coca1,5.jpg" },
    { id: 46, cat: 'bebidas', name: "Coca Cola 2L", price: 15.00, desc: ".", img: "image/coca2l.jpg" },
    { id: 47, cat: 'bebidas', name: "Guaraná antártica 1L", price: 10.00, desc: "", img: "image/guarana1l.jpg" },
    { id: 48, cat: 'bebidas', name: "Guaraná antártica 2L", price: 15.00, desc: "", img: "image/guarana2l.jpg" },

    // COMBOS
    { id: 19, cat: 'combos', name: "Combo duplo Clássico", price: 40.00, desc: "2 clássicos da casa + guaraná antártica de 1litro", img: "img/comboduplocerto.jpg" },
    { id: 31, cat: 'combos', name: "Combo Família Clássico", price: 90.00, desc: "4 clássicos da casa + batata + guaraná antártica de 2 litros", img: "img/combo maior.jpg" },
    { id: 32, cat: 'combos', name: "Combo BBQ Duplo", price: 60.00, desc: "2 BBQ Bacon + guaraná antártica de 1litro ", img: "img/comboduplocerto.jpg" },
    { id: 33, cat: 'combos', name: "Combo BBQ Família", price: 120.00, desc: "4 BBQ Bacon + batata + guaraná antártica de 2litros", img: "img/combo maior.jpg" },
    { id: 34, cat: 'combos', name: "Combo Egg Duplo", price: 45.00, desc: "2 EGG BURGER + guaraná antártica de 1litro ", img: "img/comboduplocerto.jpg" },
    { id: 35, cat: 'combos', name: "Combo Egg Família", price: 100.00, desc: "4 EGG BURGER + batata + guaraná antártica de 2litros ", img: "img/combo maior.jpg" },

    // ESPETINHOS
    { id: 501, cat: 'espetinhos', name: "Espeto Simples", price: 15.00, desc: "1 Espeto de sua preferência (Carne, Frango, Toscana, etc), acompanhado de mandioca cozida e molho da casa. (Informe o sabor!)", img: "img/espetinho.jpg" },
    { id: 502, cat: 'espetinhos', name: "Espeto Completo", price: 25.00, desc: "1 Espeto de sua preferência, acompanhado de: Arroz, Farofa de couve com calabresa e bacon, Mandioca cozida, Vinagrete, Molho da casa. (Informe o sabor!)", img: "img/espetinho.jpg" },
    { id: 503, cat: 'espetinhos', name: "Completo com 2 Espetos", price: 35.00, desc: "2 Espetos de sua preferência, acompanhados de: Arroz, Farofa de couve com calabresa e bacon, Mandioca cozida, Vinagrete, Molho da casa. (Informe os sabores!)", img: "img/espetinho.jpg" },
    { id: 504, cat: 'espetinhos', name: "Espeto no Pão de Alho", price: 28.00, desc: "Pão francês grelhado no creme de alho, 2 espetos de sua preferência, vinagrete, mussarela derretida e molho verde da casa. (Informe os sabores!)", img: "img/espetinho.jpg" },

    // ADICIONAIS
    { id: 60, cat: 'adicionais', name: "Piscina de Cheddar", price: 5.00, desc: "A famosa piscina de cheddar extra pra você mergulhar seu lanche.", img: "img/picsina.png" },
];

const defaultMetrics = {
    date: new Date().toISOString().split('T')[0],
    totalRevenue: 0,
    totalOrders: 0,
    salesGoal: 2000.00,
    completedOrders: 0,
    cancelledOrders: 0
};

// Inicializa o banco de dados vazio se necessário
function initDB() {
    if (!localStorage.getItem(DB_KEYS.PRODUCTS)) {
        localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
    }
    if (!localStorage.getItem(DB_KEYS.ORDERS)) {
        localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify([]));
    }
    if (!localStorage.getItem(DB_KEYS.METRICS)) {
        localStorage.setItem(DB_KEYS.METRICS, JSON.stringify(defaultMetrics));
    }
}

initDB();

export const db = {
    // ---- PRODUCTS ----
    getProducts: () => {
        return JSON.parse(localStorage.getItem(DB_KEYS.PRODUCTS));
    },

    createProduct: (productData) => {
        const products = db.getProducts();
        const newProduct = {
            id: 'prod_' + Math.random().toString(36).substr(2, 9),
            ...productData
        };
        products.push(newProduct);
        localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(products));
        
        window.dispatchEvent(new Event('local_storage_update'));
        return newProduct;
    },

    updateProduct: (id, updatedData) => {
        const products = db.getProducts();
        const index = products.findIndex(p => p.id.toString() === id.toString());
        if (index !== -1) {
            products[index] = { ...products[index], ...updatedData };
            localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(products));
            window.dispatchEvent(new Event('local_storage_update'));
            return products[index];
        }
        return null;
    },

    deleteProduct: (id) => {
        let products = db.getProducts();
        products = products.filter(p => p.id.toString() !== id.toString());
        localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(products));
        window.dispatchEvent(new Event('local_storage_update'));
    },

    // ---- ORDERS ----
    getOrders: () => {
        return JSON.parse(localStorage.getItem(DB_KEYS.ORDERS));
    },
    
    createOrder: (customer, items, summary) => {
        const orders = db.getOrders();
        const newOrder = {
            id: 'ord_' + Math.random().toString(36).substr(2, 9),
            customer,
            items,
            summary,
            status: 'pending', // pending, preparing, completed, cancelled
            createdAt: new Date().toISOString()
        };
        orders.push(newOrder);
        localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(orders));
        
        // Dispara evento manual para a própria aba (se necessário)
        window.dispatchEvent(new Event('local_storage_update'));
        
        return newOrder;
    },

    updateOrderStatus: (orderId, newStatus) => {
        const orders = db.getOrders();
        const orderIndex = orders.findIndex(o => o.id === orderId);
        
        if (orderIndex > -1) {
            const oldStatus = orders[orderIndex].status;
            orders[orderIndex].status = newStatus;
            orders[orderIndex].updatedAt = new Date().toISOString();
            
            localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(orders));
            
            // Atualizar métricas se foi concluído ou cancelado
            if (newStatus === 'completed' && oldStatus !== 'completed') {
                db.incrementMetrics(orders[orderIndex].summary.total, 'completed');
            } else if (newStatus === 'cancelled' && oldStatus !== 'cancelled') {
                db.incrementMetrics(0, 'cancelled'); // cancelado não soma receita
            }

            window.dispatchEvent(new Event('local_storage_update'));
        }
    },

    // ---- METRICS ----
    getMetrics: () => {
        const metrics = JSON.parse(localStorage.getItem(DB_KEYS.METRICS));
        const today = new Date().toISOString().split('T')[0];
        
        // Resetar métricas se mudou de dia
        if (metrics.date !== today) {
            const newMetrics = { ...defaultMetrics, date: today };
            localStorage.setItem(DB_KEYS.METRICS, JSON.stringify(newMetrics));
            return newMetrics;
        }
        return metrics;
    },

    incrementMetrics: (revenueAmount, type) => {
        const metrics = db.getMetrics();
        metrics.totalOrders += 1;
        
        if (type === 'completed') {
            metrics.completedOrders += 1;
            metrics.totalRevenue += revenueAmount;
        } else if (type === 'cancelled') {
            metrics.cancelledOrders += 1;
        }
        
        localStorage.setItem(DB_KEYS.METRICS, JSON.stringify(metrics));
    },

    // ---- REAL-TIME LISTENER ----
    // Permite que a UI escute mudanças no LocalStorage e atualize a tela
    onSnapshot: (callback) => {
        // Escuta mudanças de outras abas
        window.addEventListener('storage', (e) => {
            if (Object.values(DB_KEYS).includes(e.key)) {
                callback();
            }
        });
        // Escuta mudanças na aba atual
        window.addEventListener('local_storage_update', () => {
            callback();
        });
    }
};
