import Bedroom from './bedroom';
import Livingroom from './livingroom';
import {
    HouseFactory,
    AbstractBedRoom,
    AbstractLivingRoom,
    roomType
} from '@/creational-pattern/abstract-factory/intefaces/component.interface';

class HouseClassic implements HouseFactory {
    bedRoom = (): AbstractBedRoom => new Bedroom();

    livingRoom = (): AbstractLivingRoom => new Livingroom();

    roomType(): roomType {
        return 'clasics';
    }
}

export default HouseClassic;