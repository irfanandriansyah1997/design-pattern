import ComponentAbstract from '@/structural-pattern/composite/abstract/component.abstract';
import {
    ComponentInterface,
    TreeInterface
} from '@/structural-pattern/composite/interface/component.interface';

/**
 * Branch
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
class Branch extends ComponentAbstract {
    protected children: ComponentInterface[] = [];

    constructor(private name: string) {
        super();
        this.getName = this.getName.bind(this);
        this.execute = this.execute.bind(this);
    }

    /**
     * Is Composite
     * @returns {boolean}
     */
    public isComposite(): boolean {
        return true;
    }

    /**
     * Get Name
     * @returns {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Add Branch
     * @param {ComponentInterface} component - component
     * @returns {void}
     */
    public add(component: ComponentInterface): void {
        this.children.push(component);
        component.setParent(this);
    }

    /**
     * Remove Branch
     * @param {ComponentInterface} component - component
     * @returns {void}
     */
    public remove(component: ComponentInterface): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        if (component.isComposite()) {
            component.setParent(undefined);
        }
    }

    /**
     * Execute
     * @returns {TreeInterface}
     */
    execute(): TreeInterface {
        const { children, getName } = this;
        return {
            name: getName(),
            children: children.map(({ execute }) => execute())
        };
    }
}

export default Branch;
