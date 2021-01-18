import {
    ComponentInterface,
    TreeInterface
} from '@/structural-pattern/decorator/interface/component.interface';

import BaseDecorator from './base-decorator';

/**
 * Decorator B
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.18
 */
class DecoratorB extends BaseDecorator {
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
            message: 'in this decorator b',
            composite: super.operation()
        };
    }
}

export default DecoratorB;
