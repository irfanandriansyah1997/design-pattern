import { SubjectInterface } from '@/structural-pattern/proxy/interface/subject.interface';

import RealSubject from './subject';

/**
 * Proxy
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.23
 */
export class Proxy implements SubjectInterface {
    constructor(private subject: RealSubject) {
        this.request = this.request.bind(this);
    }

    /**
     * Check Access
     * @returns {boolean}
     */
    private checkAccess(): boolean {
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request.');

        return true;
    }

    /**
     * Request
     * @returns {string}
     */
    request(): string {
        if (this.checkAccess()) {
            return `guaranteed ${this.subject.request()}`;
        }

        return '';
    }
}
