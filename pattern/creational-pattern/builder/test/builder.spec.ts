import ConcreteBuilder1 from '@/creational-pattern/builder/builder/concrete-builder-1';
import Director from '@/creational-pattern/builder/director/director';

describe('Testing Builder', () => {
    describe('Testing With Director', () => {
        it('Build Minimal Viable Product', () => {
            const builder = new ConcreteBuilder1();
            const director = new Director();
            director.setBuilder(builder);
            director.buildMinimalViableProduct();

            expect(builder.product.listParts()).toBe(
                'Product parts: Part A'
            );
        });

        it('Build Full Product', () => {
            const builder = new ConcreteBuilder1();
            const director = new Director();
            director.setBuilder(builder);
            director.buildFullFeaturedProduct();
            expect(builder.product.listParts()).toBe(
                'Product parts: Part A, Part B, Part C'
            );
        });
    });

    describe('Testing Without Director', () => {
        it('Build Minimal Viable Product', () => {
            expect(
                new ConcreteBuilder1()
                    .productPartA()
                    .productPartC()
                    .product.listParts()
            ).toBe('Product parts: Part A, Part C');
        });
    });
});
