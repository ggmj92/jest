const { resetProducts, removeProduct, getProducts, getProduct, updateProduct, addProduct } = require('./product');

//ADD A PRODUCT
describe('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should add a product', () => {
        addProduct('Product 1', 100);
        expect(getProducts()).toEqual([{ id: 1, name: 'Product 1', price: 100 }]);
    });

    it('should increment the id by 1 every time a product is added', () => {
        addProduct('Product 1', 100);
        addProduct('Product 2', 200);
        expect(getProducts()).toEqual([{ id: 1, name: 'Product 1', price: 100 }, { id: 2, name: 'Product 2', price: 200 }]);
    });

    it('should throw an error if name or price is not defined', () => {
        expect(() => addProduct()).toThrow();
        expect(() => addProduct('Product 1')).toThrow();
    });
});

//REMOVE A PRODUCT
describe('removeProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('Product 1', 100);
    });

    it('should delete a product', () => {
        removeProduct(1);
        expect(getProducts()).toEqual([]);
    });

    it('should throw an error if the product does not exist', () => {
        expect(() => removeProduct(2)).toThrow();
    });
});

//GET A PRODUCT
describe('getProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('Product 1', 100);
    });

    it('should return a product by its id', () => {
        expect(getProduct(1)).toEqual({ id: 1, name: 'Product 1', price: 100 });
    });

    it('should throw an error if the product does not exist', () => {
        expect(() => getProduct(2)).toThrow();
    });
});

//UPDATE A PRODUCT
describe('updateProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('Product 1', 100);
    });

    it('should update a product by its id', () => {
        updateProduct(1, 'Product 1 updated', 150);
        expect(getProduct(1)).toEqual({ id: 1, name: 'Product 1 updated', price: 150 });
    });

    it('should throw an error if the product does not exist', () => {
        expect(() => updateProduct(2, 'Product 2', 200)).toThrow();
    });
});

