import SampleFunc from '@/sample/sample.ts';

describe('Sample Testing', () => {
    it('Testing Generate Product', () => {
        expect(SampleFunc()).toBe(7);
    });
});
