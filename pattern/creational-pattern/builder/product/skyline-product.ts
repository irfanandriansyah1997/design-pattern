import {
    CarProductInterface,
    CarEngineType,
    CarBreakSystemType
} from '@/creational-pattern/builder/interfaces/product.interface';

class SkylineProduct implements CarProductInterface {
    seats = 0;

    engine: CarEngineType = 'cvt';

    breakSystem: CarBreakSystemType = 'cakram';

    color = 'hitam';
}

export default SkylineProduct;
