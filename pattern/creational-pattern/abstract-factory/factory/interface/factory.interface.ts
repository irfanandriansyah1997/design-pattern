import {
    ProductAInterface,
    ProductBInterface
} from '@/creational-pattern/abstract-factory/product/interface/product.interface';

/**
 * Abstract Factory Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
export interface AbstractFactoryInterface {
    createProductA(): ProductAInterface;
    createProductB(): ProductBInterface;
}
