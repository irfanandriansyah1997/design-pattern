/**
 * Car Product Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
export interface CarProductInterface {
    seats: number;
    engine: CarEngineType;
    breakSystem: CarBreakSystemType;
    color: string;
}

export type CarEngineType = 'cvt' | 'turbo';

export type CarBreakSystemType = 'cakram' | 'tromol';

/**
 * Motor Cycle Product Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
export interface MotorCycleInterface {
    seats: number;
    engine: MotorCycleInterfaceEngineType;
    breakSystem: MotorCycleInterfaceBreakSystemType;
    color: string;
}

export type MotorCycleInterfaceEngineType = '4 tak' | '2 tak';

export type MotorCycleInterfaceBreakSystemType = 'cakram' | 'tromol';
