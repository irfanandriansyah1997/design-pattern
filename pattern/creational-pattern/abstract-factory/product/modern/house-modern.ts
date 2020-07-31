import Bedroom from './bedroom';
import Livingroom from './livingroom';
import {
    HouseFactory,
    AbstractBedRoom,
    AbstractLivingRoom,
    roomType
} from '../../intefaces/component.interface';

class HouseModern implements HouseFactory {
    bedRoom = (): AbstractBedRoom => new Bedroom();

    livingRoom = (): AbstractLivingRoom => new Livingroom();

    roomType(): roomType {
        return 'modern';
    }
}

export default HouseModern;