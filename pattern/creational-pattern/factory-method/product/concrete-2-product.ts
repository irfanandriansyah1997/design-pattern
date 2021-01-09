import { ProductInterface } from './interface/product.interface';

/**
 * Concrete 2 Product
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class Concrete2Product implements ProductInterface {
    /**
     * Operation
     * @returns {string}
     */
    public operation(): string {
        return 'Product 2';
    }
}

export default Concrete2Product;
