/**
 * Builder Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
export interface BuilderInterface<
    Product,
    Engine,
    BreakSystem,
    ClassProduct
> {
    product: ClassProduct;
    reset(classProduct: Constructable<ClassProduct>): Product;
    setSeats(seat: number): this;
    setEngine(engine: Engine): this;
    setBreak(breakSystem: BreakSystem): this;
    setColor(color: string): this;
}

export interface Constructable<T> {
    new() : T;
}