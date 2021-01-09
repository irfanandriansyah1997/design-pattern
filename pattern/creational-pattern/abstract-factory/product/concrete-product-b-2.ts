import {
    ProductAInterface,
    ProductBInterface
} from '@/creational-pattern/abstract-factory/product/interface/product.interface';

/**
 * Concrete Product B2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class ConcreteProductB2 implements ProductBInterface {
    /**
     * Method Example In Product B1 Interface
     * @returns {string}
     */
    usefulFunctionB(): string {
        return 'result product B2';
    }

    /**
     * Method Example Running Product Using  Composition
     * @param {ProductAInterface} collaborator - composition class extends ProductA1Interface
     * @returns {string}
     */
    anotherUsefulFunctionB(collaborator: ProductAInterface): string {
        const result = collaborator.usefulFunctionA();

        return `The result of the B2 collaborating with the (${result})`;
    }
}

export default ConcreteProductB2;
