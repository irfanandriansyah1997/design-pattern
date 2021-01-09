import { ProductInterface } from './interface/product.interface';

/**
 * Concrete 1 Product
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class Concrete1Product implements ProductInterface {
    /**
     * Operation
     * @returns {string}
     */
    public operation(): string {
        return 'Product 1';
    }
}

export default Concrete1Product;
