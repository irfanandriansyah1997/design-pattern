import Concrete1Product from '@/creational-pattern/factory-method/product/concrete-1-product';
import { ProductInterface } from '@/creational-pattern/factory-method/product/interface/product.interface';

import AbstractCreatorClass from './abstract/creator.abstract';
/**
 * Concrete Creator 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
class ConcreteCreator1 extends AbstractCreatorClass {
    /**
     * Factory Method
     * @description generate product 1 instance
     * @returns {ProductInterface}
     */
    factoryMethod(): ProductInterface {
        return new Concrete1Product();
    }
}

export default ConcreteCreator1;
