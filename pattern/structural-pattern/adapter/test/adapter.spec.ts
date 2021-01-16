import {
    numberToString,
    stringToNumber
} from '@/structural-pattern/adapter/helper/translator';

describe('Testing Adapter', () => {
    it('Testing translate', () => {
        expect(numberToString(10)).toBe('10');
        expect(numberToString(14)).toBe('14');
    });

    it('Testing reverse translate', () => {
        expect(stringToNumber('10')).toBe(10);
        expect(stringToNumber('14')).toBe(14);
    });
});
