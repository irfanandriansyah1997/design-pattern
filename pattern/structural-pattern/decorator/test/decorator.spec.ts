import ConcreteComponent from '../component/component';
import DecoratorA from '../decorator/concrete-decorator-a';
import DecoratorB from '../decorator/concrete-decorator-b';

describe('Testing Decorator', () => {
    it('Testing Generate Sample Component', () => {
        const simple = new ConcreteComponent();

        expect(simple.operation()).toStrictEqual({
            message: 'Concrete Component'
        });
    });

    it('Testing Generate Sample Component With Decoreator', () => {
        const simple = new ConcreteComponent();
        const decorator1 = new DecoratorA(simple);
        const decorator2 = new DecoratorB(decorator1);
        const decorator3 = new DecoratorA(decorator2);
        const decorator4 = new DecoratorB(decorator3);

        expect(decorator4.operation()).toStrictEqual({
            composite: {
                composite: {
                    composite: {
                        composite: {
                            message: 'Concrete Component'
                        },
                        message: 'in this decorator a'
                    },
                    message: 'in this decorator b'
                },
                message: 'in this decorator a'
            },
            message: 'in this decorator b'
        });
    });
});
