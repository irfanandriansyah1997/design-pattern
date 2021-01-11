import ConcreteBuilder1 from '@/creational-pattern/builder/builder/concrete-builder-1';
import { BuilderInterface } from '@/creational-pattern/builder/builder/interface/builder.interface';

/**
 * Director Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.11
 */
class Director {
    private _builder: BuilderInterface = new ConcreteBuilder1();

    /**
     * Setter Builder
     * @param {BuilderInterface} builder - builder param
     * @returns {void}
     */
    public setBuilder(builder: BuilderInterface): void {
        this._builder = builder;
    }

    /**
     * Build Minimal Viable Product
     * @returns {void}
     */
    public buildMinimalViableProduct(): void {
        this._builder.productPartA();
    }

    /**
     * Build Full Featured Product
     * @returns {void}
     */
    public buildFullFeaturedProduct(): void {
        this._builder.productPartA().productPartB().productPartC();
    }
}

export default Director;
