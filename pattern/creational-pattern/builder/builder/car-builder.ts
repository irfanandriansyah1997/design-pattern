import { CarProductInterface, CarEngineType, CarBreakSystemType } from '../interfaces/product.interface';
import { BuilderInterface } from '../interfaces/component.interface';
import SkylineProduct from '../product/skyline-product';

/**
 * Car Builder Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.02.03
 */
class CarBuilder implements BuilderInterface<
    CarProductInterface,
    CarEngineType,
    CarBreakSystemType
> {
    product: CarProductInterface;

    constructor() {
        this.product = this.reset();
    }

    reset(): CarProductInterface {
        return new SkylineProduct();
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