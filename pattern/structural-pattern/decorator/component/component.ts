import {
    ComponentInterface,
    TreeInterface
} from '@/structural-pattern/decorator/interface/component.interface';

/**
 * Concrete Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.18
 */
class ConcreteComponent implements ComponentInterface {
    constructor() {
        this.operation = this.operation.bind(this);
    }

    /**
     * Operation
     * @returns {TreeInterface}
     */
    operation(): TreeInterface {
        return {
            message: 'Concrete Component'
        };
    }
}

export default ConcreteComponent;
