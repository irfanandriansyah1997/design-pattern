import { MotorCycleInterface, MotorCycleInterfaceEngineType, MotorCycleInterfaceBreakSystemType } from '@/creational-pattern/builder/interfaces/product.interface';
import { BuilderInterface, Constructable } from '@/creational-pattern/builder/interfaces/component.interface';


/**
 * MotorCycle Builder Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
class MotorCycleBuilder implements BuilderInterface<
    MotorCycleInterface,
    MotorCycleInterfaceEngineType,
    MotorCycleInterfaceBreakSystemType,
    MotorCycleInterface
> {
    product: MotorCycleInterface;

    constructor(classProduct: Constructable<MotorCycleInterface>) {
        this.product = this.reset(classProduct);
    }

    reset(classProduct: Constructable<MotorCycleInterface>): MotorCycleInterface {
        return new classProduct();
    }

    setSeats(seat: number): this {
        this.product.seats = seat;
        return this;
    }

    setEngine(engine: MotorCycleInterfaceEngineType): this {
        this.product.engine = engine;
        return this;
    }

    setBreak(breakSystem: MotorCycleInterfaceBreakSystemType): this {
        this.product.breakSystem = breakSystem;
        return this;
    }

    setColor(color: string): this {
        this.product.color = color;
        return this;
    }
}

export default MotorCycleBuilder;