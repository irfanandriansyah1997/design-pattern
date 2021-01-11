import Prototype from './prototype';

/**
 * Component Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.11
 */
class Component {
    public prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

export default Component;
