import { MotorCycleInterface, MotorCycleInterfaceEngineType, MotorCycleInterfaceBreakSystemType } from "../interfaces/product.interface";

class CBRProduct implements MotorCycleInterface {
    seats: number = 0;

    engine: MotorCycleInterfaceEngineType = '2 tak';

    breakSystem: MotorCycleInterfaceBreakSystemType = 'cakram';

    color: string = 'hitam';
}

export default CBRProduct;