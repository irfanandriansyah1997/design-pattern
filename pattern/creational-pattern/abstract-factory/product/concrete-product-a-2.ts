import { ProductAInterface } from '@/creational-pattern/abstract-factory/product/interface/product.interface';

/**
 * Concrete Product A2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class ConcreteProductA2 implements ProductAInterface {
    /**
     * Method Example In Product A2 Interface
     * @returns {string}
     */
    usefulFunctionA(): string {
        return 'result product A2';
    }
}

export default ConcreteProductA2;
