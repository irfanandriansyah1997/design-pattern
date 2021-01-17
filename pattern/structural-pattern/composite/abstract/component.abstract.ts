import {
    ComponentInterface,
    TreeInterface
} from '../interface/component.interface';

/**
 * Composite Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
abstract class ComponentAbstract implements ComponentInterface {
    protected parent: ComponentInterface | undefined;

    abstract getName(): string;

    abstract execute(): TreeInterface;

    /**
     * Set Parent
     * @param {ComponentInterface} parent - parent param
     * @returns {void}
     */
    public setParent(parent: ComponentInterface): void {
        this.parent = parent;
    }

    /**
     * Get Parent
     * @returns {ComponentInterface | undefined}
     */
    public getParent(): ComponentInterface | undefined {
        return this.parent;
    }

    /**
     * Is Composite
     * @returns {boolean}
     */
    public isComposite(): boolean {
        return false;
    }
}

export default ComponentAbstract;
