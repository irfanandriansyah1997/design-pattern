import { AbstractBedRoom } from '../../intefaces/component.interface';

class Bedroom implements AbstractBedRoom {
    lengthRoom: number = 40;

    widthRoom: number = 40;

    bedMerk(): string {
        return 'bed classic';
    }

    isHaveChair = (): boolean => false;

    isHaveTV = (): boolean => false;
}

export default Bedroom;