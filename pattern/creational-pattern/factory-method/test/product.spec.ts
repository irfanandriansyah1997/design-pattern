import ConcreteCreator1 from '@/creational-pattern/factory-method/creator/concrete-1-creator';
import ConcreteCreator2 from '@/creational-pattern/factory-method/creator/concrete-2-creator';
import Concrete1Product from '@/creational-pattern/factory-method/product/concrete-1-product';
import Concrete2Product from '@/creational-pattern/factory-method/product/concrete-2-product';

describe('Testing method factory', () => {
    describe('Testing access method operation each product', () => {
        it('Testing Product 1', () => {
            expect(new Concrete1Product().operation()).toBe('Product 1');
        });

        it('Testing Product 2', () => {
            expect(new Concrete2Product().operation()).toBe('Product 2');
        });
    });

    describe('Testing access method some operation each concrete creator', () => {
        it('Testing Product 1', () => {
            expect(new ConcreteCreator1().someOperation()).toBe('Sample output from Product 1');
        });

        it('Testing Product 2', () => {
            expect(new ConcreteCreator2().someOperation()).toBe('Sample output from Product 2');
        });
    });
});
