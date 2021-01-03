import { CarProductInterface, CarEngineType, CarBreakSystemType } from '@/creational-pattern/builder/interfaces/product.interface';
import { BuilderInterface, Constructable } from '@/creational-pattern/builder/interfaces/component.interface';


/**
 * Car Builder Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
class CarBuilder implements BuilderInterface<
    CarProductInterface,
    CarEngineType,
    CarBreakSystemType,
    CarProductInterface
> {
    product: CarProductInterface;

    constructor(classProduct: Constructable<CarProductInterface>) {
        this.product = this.reset(classProduct);
    }

    reset(classProduct: Constructable<CarProductInterface>): CarProductInterface {
        return new classProduct();
    }

    setSeats(seat: number): this {
        this.product.seats = seat;
        return this;
    }

    setEngine(engine: CarEngineType): this {
        this.product.engine = engine;
        return this;
    }

    setBreak(breakSystem: CarBreakSystemType): this {
        this.product.breakSystem = breakSystem;
        return this;
    }

    setColor(color: string): this {
        this.product.color = color;
        return this;
    }
}

export default CarBuilder;