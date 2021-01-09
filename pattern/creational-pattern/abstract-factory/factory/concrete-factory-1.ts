import ConcreteProductA1 from '@/creational-pattern/abstract-factory/product/concrete-product-a-1';
import ConcreteProductB1 from '@/creational-pattern/abstract-factory/product/concrete-product-b-1';
import {
    ProductAInterface,
    ProductBInterface
} from '@/creational-pattern/abstract-factory/product/interface/product.interface';

import { AbstractFactoryInterface } from './interface/factory.interface';

/**
 * Concrete Factory 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class ConcreteFactory1 implements AbstractFactoryInterface {
    /**
     * Create Product A
     * @returns {ProductAInterface}
     */
    public createProductA(): ProductAInterface {
        return new ConcreteProductA1();
    }

    /**
     * Create Product B
     * @returns {ProductBInterface}
     */
    public createProductB(): ProductBInterface {
        return new ConcreteProductB1();
    }
}

export default ConcreteFactory1;
