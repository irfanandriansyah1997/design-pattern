import ConcreteProductA2 from '@/creational-pattern/abstract-factory/product/concrete-product-a-2';
import ConcreteProductB2 from '@/creational-pattern/abstract-factory/product/concrete-product-b-2';
import {
    ProductAInterface,
    ProductBInterface
} from '@/creational-pattern/abstract-factory/product/interface/product.interface';

import { AbstractFactoryInterface } from './interface/factory.interface';

/**
 * Concrete Factory 2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
class ConcreteFactory2 implements AbstractFactoryInterface {
    /**
     * Create Product A
     * @returns {ProductAInterface}
     */
    public createProductA(): ProductAInterface {
        return new ConcreteProductA2();
    }

    /**
     * Create Product B
     * @returns {ProductBInterface}
     */
    public createProductB(): ProductBInterface {
        return new ConcreteProductB2();
    }
}

export default ConcreteFactory2;
