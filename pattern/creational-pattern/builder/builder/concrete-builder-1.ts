import Product1 from '@/creational-pattern/builder/product/product1';

import { BuilderInterface } from './interface/builder.interface';

/**
 * Concrete Builder 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.11
 */
class ConcreteBuilder1 implements BuilderInterface {
    private _product: Product1;

    constructor() {
        this._product = new Product1();
    }

    /**
     * Reset Model
     * @returns {void}
     */
    public reset(): void {
        this._product = new Product1();
    }

    /**
     * Set Product Part A
     * @returns {ConcreteBuilder1}
     */
    public productPartA(): ConcreteBuilder1 {
        this._product.addPart('Part A');

        return this;
    }

    /**
     * Set Product Part B
     * @returns {ConcreteBuilder1}
     */
    public productPartB(): ConcreteBuilder1 {
        this._product.addPart('Part B');

        return this;
    }

    /**
     * Set Product Part C
     * @returns {ConcreteBuilder1}
     */
    public productPartC(): ConcreteBuilder1 {
        this._product.addPart('Part C');

        return this;
    }

    /**
     * Getter Product
     * @returns {Product1}
     */
    public get product(): Product1 {
        const temp = this._product;
        this.reset();
        return temp;
    }
}

export default ConcreteBuilder1;
