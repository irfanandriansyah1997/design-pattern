import ConcreteCreator1 from '@/creational-pattern/abstract-factory/factory/concrete-factory-1';
import ConcreteCreator2 from '@/creational-pattern/abstract-factory/factory/concrete-factory-2';

describe('Testing abstract factory', () => {
    describe('Testing access method some operation each concrete creator', () => {
        it('Testing Product 1', () => {
            const instance = new ConcreteCreator1();
            const productA = instance.createProductA();
            const productB = instance.createProductB();

            expect(productA.usefulFunctionA()).toBe('result product A1');
            expect(productB.usefulFunctionB()).toBe('result product B1');
            expect(productB.anotherUsefulFunctionB(productA)).toBe(
                'The result of the B1 collaborating with the (result product A1)'
            );
        });

        it('Testing Product 2', () => {
            const instance = new ConcreteCreator2();
            const productA = instance.createProductA();
            const productB = instance.createProductB();

            expect(productA.usefulFunctionA()).toBe('result product A2');
            expect(productB.usefulFunctionB()).toBe('result product B2');
            expect(productB.anotherUsefulFunctionB(productA)).toBe(
                'The result of the B2 collaborating with the (result product A2)'
            );
        });
    });
});
