let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name or price is not defined');
    }
    if (products.find(product => product.name === name)) {
        throw new Error('Product already exists');
    }
    const product = { id: ++id, name, price };
    products.push(product);
    return product;
};

function removeProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        throw new Error('Product does not exist');
    }
    products.splice(index, 1);
};

function getProducts() {
    return products;
};

function getProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error('Product does not exist');
    }
    return product;
};

function updateProduct(id, name, price) {
    const product = getProduct(id);
    if (name) product.name = name;
    if (price) product.price = price;
    return product;
};

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };