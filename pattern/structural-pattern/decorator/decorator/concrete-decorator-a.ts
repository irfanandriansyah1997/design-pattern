import {
    ComponentInterface,
    TreeInterface
} from '@/structural-pattern/decorator/interface/component.interface';

import BaseDecorator from './base-decorator';

/**
 * Decorator A
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.18
 */
class DecoratorA extends BaseDecorator {
    constructor(component: ComponentInterface) {
        super(component);
        this.operation = this.operation.bind(this);
    }

    /**
     * Operation
     * @returns {TreeInterface}
     */
    operation(): TreeInterface {
        return {
            message: 'in this decorator a',
            composite: super.operation()
        };
    }
}

export default DecoratorA;
