/**
 * Builder Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
export interface BuilderInterface<
    Product,
    Engine,
    BreakSystem
> {
    product: Product;
    reset(): Product;
    setSeats(seat: number): this;
    setEngine(engine: Engine): this;
    setBreak(breakSystem: BreakSystem): this;
    setColor(color: string): this;
}