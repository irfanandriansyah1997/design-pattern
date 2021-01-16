import NumberToStringAdapter from '@/structural-pattern/adapter/adapter/number-adapter';

/**
 * Number To String
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.16
 * @param {number} param - input translator
 * @returns {string}
 */
export const numberToString = (param: number): string =>
    NumberToStringAdapter.getInstance().reverseTranslate(param);

/**
 * String To Number
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.16
 * @param {number} param - input translator
 * @returns {string}
 */
export const stringToNumber = (param: string): number =>
    NumberToStringAdapter.getInstance().translate(param);
