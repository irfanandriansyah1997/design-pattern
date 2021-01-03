import { AbstractBedRoom } from '@/creational-pattern/abstract-factory/intefaces/component.interface';

class Bedroom implements AbstractBedRoom {
    lengthRoom = 40;

    widthRoom = 40;

    bedMerk(): string {
        return 'bed classic';
    }

    isHaveChair = (): boolean => false;

    isHaveTV = (): boolean => false;
}

export default Bedroom;
