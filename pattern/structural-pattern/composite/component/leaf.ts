import ComponentAbstract from '@/structural-pattern/composite/abstract/component.abstract';
import { TreeInterface } from '@/structural-pattern/composite/interface/component.interface';

/**
 * Leaf
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
class Leaf extends ComponentAbstract {
    constructor(private name: string) {
        super();
        this.getName = this.getName.bind(this);
        this.execute = this.execute.bind(this);
    }

    /**
     * Get Name
     * @returns {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Execute
     * @returns {TreeInterface}
     */
    execute(): TreeInterface {
        const { getName } = this;
        return {
            name: getName(),
            children: undefined
        };
    }
}

export default Leaf;
