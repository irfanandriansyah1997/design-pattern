import System1 from './apps/system1';
import System2 from './apps/system2';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.18
 */
class Facade {
    protected system1: System1;

    protected system2: System2;

    constructor(system1: System1 | undefined, system2: System2 | undefined) {
        this.system1 = system1 || new System1();
        this.system2 = system2 || new System2();
        this.operation = this.operation.bind(this);
    }

    /**
     * Operation
     * @returns {string}
     */
    operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.system1.operation1();
        result += this.system2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.system1.operation2();
        result += this.system2.operation2();

        return result;
    }
}

export default Facade;
