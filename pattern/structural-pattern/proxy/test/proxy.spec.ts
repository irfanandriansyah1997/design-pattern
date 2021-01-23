import { Proxy } from '@/structural-pattern/proxy/subject/proxy';
import { RealSubject } from '@/structural-pattern/proxy/subject/subject';

describe('Testing Proxy', () => {
    it('Testing Without Proxy', () => {
        expect(new RealSubject().request()).toBe('in this real subject');
    });

    it('Testing Without Proxy', () => {
        const subject = new RealSubject();
        const proxy = new Proxy(subject);
        expect(proxy.request()).toBe('guaranteed in this real subject');
    });
});
