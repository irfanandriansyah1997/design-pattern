import System1 from '@/structural-pattern/facade/apps/system1';
import System2 from '@/structural-pattern/facade/apps/system2';
import Facade from '@/structural-pattern/facade/facade';

describe('Test Facade', () => {
    it('Testing Operation In Facade', () => {
        const system1 = new System1();
        const system2 = new System2();
        const facade = new Facade(system1, system2);

        expect(facade.operation()).toBe(
            'Facade initializes subsystems:\n' +
                'system 1: initialize\n' +
                'system 2: initialize\n' +
                'Facade orders subsystems to perform the action:\n' +
                'system 1: go!\n' +
                'system 2: fire fire\n'
        );
    });
});
