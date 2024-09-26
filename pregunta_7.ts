type Product = {
    id: number;
    name: string;
    price: number;
};

class ProductHandler {
    private productData: Array<Product> = [];

    private loopProductsAndParse(products: Array<Product>): void {
        products.forEach(product => {
            const parsedData = this.parseDataForProduct(product);
            this.productData.push(parsedData);
        });
    }

    private parseDataForProduct(product: Product): Product {
        // Parsing logic here
        return {
            id: product.id,
            name: product.name,
            price: product.price
        };
    }
}