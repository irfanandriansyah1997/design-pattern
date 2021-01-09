import { ProductAInterface } from '@/creational-pattern/abstract-factory/product/interface/product.interface';

/**
 * Concrete Product A1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class ConcreteProductA1 implements ProductAInterface {
    /**
     * Method Example In Product A1 Interface
     * @returns {string}
     */
    usefulFunctionA(): string {
        return 'result product A1';
    }
}

export default ConcreteProductA1;
