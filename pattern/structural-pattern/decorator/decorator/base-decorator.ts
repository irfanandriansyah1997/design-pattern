import {
    ComponentInterface,
    TreeInterface
} from '@/structural-pattern/decorator/interface/component.interface';

/**
 * Base Decorator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.18
 */
class BaseDecorator implements ComponentInterface {
    constructor(protected component: ComponentInterface) {
        this.operation = this.operation.bind(this);
    }
    /**
     * Operation
     * @returns {TreeInterface}
     */
    operation(): TreeInterface {
        const {
            component: { operation }
        } = this;

        return operation();
    }
}

export default BaseDecorator;
