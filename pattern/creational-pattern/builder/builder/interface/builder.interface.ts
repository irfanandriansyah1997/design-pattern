/**
 * Builder Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.11
 */
export interface BuilderInterface {
    productPartA(): BuilderInterface;
    productPartB(): BuilderInterface;
    productPartC(): BuilderInterface;
}
