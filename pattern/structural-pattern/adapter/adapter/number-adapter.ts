import { AdapterInterface } from './interface/adapter.interface';

/**
 * Number To String Adapter
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.16
 */
class NumberToStringAdapter implements AdapterInterface<string, number> {
    private static instance: AdapterInterface<string, number>;
    /**
     * Translate String To Number
     * @param {string} input - input adapter
     * @returns {number}
     */
    public translate(input: string): number {
        return parseInt(input, 10);
    }

    /**
     * Translate String To Number
     * @param {string} input - input adapter
     * @returns {number}
     */
    public reverseTranslate(input: number): string {
        return `${input}`;
    }

    /**
     * Get Instance
     * @returns {AdapterInterface<string, number>}
     */
    public static getInstance(): AdapterInterface<string, number> {
        if (NumberToStringAdapter.instance === undefined) {
            return new NumberToStringAdapter();
        }

        return NumberToStringAdapter.instance;
    }
}

export default NumberToStringAdapter;
