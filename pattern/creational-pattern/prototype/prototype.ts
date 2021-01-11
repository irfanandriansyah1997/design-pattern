import Component from './component';

/**
 * Prototype
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.11
 */
class Prototype {
    public primitive: number | undefined;

    public date: Date | undefined;

    public circularClass: Component | undefined;

    /**
     * Clone Object
     * @returns {Prototype | undefined}
     */
    public clone(): Prototype | undefined {
        const { circularClass } = this;
        if (circularClass) {
            const clone = Object.create(this);

            clone.component = Object.create(circularClass);
            clone.circularReference = {
                ...circularClass,
                prototype: { ...this }
            };

            return clone;
        }
        return undefined;
    }
}

export default Prototype;
