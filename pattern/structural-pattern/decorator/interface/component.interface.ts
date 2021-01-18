/**
 * Tree Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.18
 */
export interface TreeInterface {
    message: string;
    composite?: TreeInterface;
}

/**
 * Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.18
 */
export interface ComponentInterface {
    operation(): TreeInterface;
}
