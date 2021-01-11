import Component from '@/creational-pattern/prototype/component';
import Prototype from '@/creational-pattern/prototype/prototype';

describe('Testing Prototype', () => {
    it('Testing Generate Clone Prototype', () => {
        const product1 = new Prototype();
        product1.primitive = 1997;
        product1.date = new Date();
        product1.circularClass = new Component(product1);

        const product2 = product1.clone();

        if (product2) {
            expect(product1.primitive).toBe(product2.primitive);

            if (product1.date && product2.date) {
                expect(product1.date.toString()).toBe(product2.date.toString());
                expect(product1.date).toStrictEqual(product2.date);
            }

            if (product1.circularClass && product2.circularClass) {
                expect(product1.circularClass).toStrictEqual(
                    product2.circularClass
                );
                expect(product1.circularClass.prototype).toStrictEqual(
                    product2.circularClass.prototype
                );
            }
        }
    });

    it('Testing Generate Clone With All Attribute Undefined', () => {
        const product1 = new Prototype();
        const product2 = product1.clone();

        if (product2) {
            expect(product1.primitive).toBe(undefined);
            expect(product1.date).toBe(undefined);
            expect(product1.circularClass).toBe(undefined);
        }
    });
});
