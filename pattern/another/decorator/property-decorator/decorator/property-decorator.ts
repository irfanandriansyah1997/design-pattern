/**
 * Logger Decorator
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {boolean} enumerable - enumarable property
 * @since 2020.07.31
 */
export const Integer = (enumerable: boolean) => (target: Object, propertyName: string): void => {
    let _response: number = (target as Record<string, number>)[propertyName];

    /**
     * Getter Value
     * @return {number}
     */
    const getter = (): number => {
        if (typeof _response === 'number' || typeof _response === 'bigint' || /^\d+$/.test(`${_response}`)) {
            return _response;
        }

        return 0;
    };

    /**
     * Setter Value
     * @param {unknown} value - value variable
     * @return {number}
     */
    const setter = (value: unknown): void => {
        if (typeof value === 'number' || typeof value === 'bigint' || /^\d+$/.test(`${value}`)) {
            _response = value as number;
        }
    };

    if (delete (target as Record<string, number>)[propertyName]) {
        Object.defineProperty(target, propertyName, {
            enumerable,
            get: getter,
            set: setter,
            configurable: true
        });
    }
};
