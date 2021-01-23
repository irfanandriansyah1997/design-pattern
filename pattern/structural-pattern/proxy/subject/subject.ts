import { SubjectInterface } from '@/structural-pattern/proxy/interface/subject.interface';

/**
 * Real Subject
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.23
 */
export class RealSubject implements SubjectInterface {
    /**
     * Request
     * @returns {string}
     */
    request(): string {
        return 'in this real subject';
    }
}

export default RealSubject;
