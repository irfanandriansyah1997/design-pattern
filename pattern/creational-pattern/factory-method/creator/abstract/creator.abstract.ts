import { ProductInterface } from '@/creational-pattern/factory-method/product/interface/product.interface';

/**
 * Abstract Creator Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
abstract class AbstractCreatorClass {
    /**
     * Generate Creator
     * @returns {ProductInterface}
     */
    public abstract factoryMethod(): ProductInterface;

    /**
     * Operation Sample
     * @returns {string}
     */
    public someOperation(): string {
        const product = this.factoryMethod();

        return `Sample output from ${product.operation()}`;
    }
}

export default AbstractCreatorClass;
