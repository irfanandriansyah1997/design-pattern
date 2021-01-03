import {
    MotorCycleInterface,
    MotorCycleInterfaceEngineType,
    MotorCycleInterfaceBreakSystemType
} from '@/creational-pattern/builder/interfaces/product.interface';

class CBRProduct implements MotorCycleInterface {
    seats = 0;

    engine: MotorCycleInterfaceEngineType = '2 tak';

    breakSystem: MotorCycleInterfaceBreakSystemType = 'cakram';

    color = 'hitam';
}

export default CBRProduct;
