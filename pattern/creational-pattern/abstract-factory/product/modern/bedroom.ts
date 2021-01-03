import { AbstractBedRoom } from '@/creational-pattern/abstract-factory/intefaces/component.interface';

class Bedroom implements AbstractBedRoom {
    lengthRoom: number = 40;

    widthRoom: number = 40;

    bedMerk(): string {
        return 'bed modern';
    }

    isHaveChair = (): boolean => false;

    isHaveTV = (): boolean => false;
}

export default Bedroom;