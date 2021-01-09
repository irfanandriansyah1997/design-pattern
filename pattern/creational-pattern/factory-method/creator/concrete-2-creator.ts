import Concrete2Product from '@/creational-pattern/factory-method/product/concrete-2-product';
import { ProductInterface } from '@/creational-pattern/factory-method/product/interface/product.interface';

import AbstractCreatorClass from './abstract/creator.abstract';
/**
 * Concrete Creator 2
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
class ConcreteCreator2 extends AbstractCreatorClass {
    /**
     * Factory Method
     * @description generate product 2 instance
     * @returns {ProductInterface}
     */
    factoryMethod(): ProductInterface {
        return new Concrete2Product();
    }
}

export default ConcreteCreator2;
