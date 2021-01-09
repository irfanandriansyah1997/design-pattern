/**
 * Product A Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
export interface ProductAInterface {
    usefulFunctionA(): string;
}

/**
 * Product B Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
export interface ProductBInterface {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: ProductAInterface): string;
}
