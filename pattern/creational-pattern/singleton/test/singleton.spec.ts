import Singleton from '@/creational-pattern/singleton/singleton';

describe('Testing Singleton', () => {
    it('Testing get object instance', () => {
        const singleton1 = Singleton.getInstance();
        const singleton2 = Singleton.getInstance();

        expect(singleton1).toStrictEqual(singleton2);
    });
});
