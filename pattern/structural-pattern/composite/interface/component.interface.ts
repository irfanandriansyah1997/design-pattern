/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tree Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
export interface TreeInterface {
    name: string;
    children?: TreeInterface[];
}

/**
 * Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
export interface ComponentInterface {
    getName(): string;
    setParent(parent: ComponentInterface | undefined);
    getParent(): ComponentInterface | undefined;
    isComposite(): boolean;
    execute(): TreeInterface;
}
