import { CarProductInterface, CarEngineType, CarBreakSystemType } from "../interfaces/product.interface";

class SkylineProduct implements CarProductInterface {
    seats: number = 0;

    engine: CarEngineType = 'cvt';

    breakSystem: CarBreakSystemType = 'cakram';

    color: string = 'hitam';
}

export default SkylineProduct;