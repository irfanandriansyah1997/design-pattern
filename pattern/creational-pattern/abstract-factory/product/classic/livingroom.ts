import { AbstractLivingRoom } from '@/creational-pattern/abstract-factory/intefaces/component.interface';

class Livingroom implements AbstractLivingRoom {
    lengthRoom = 40;

    widthRoom = 40;

    isHaveChair = (): boolean => false;

    isHaveTV = (): boolean => false;

    isHaveRugs = (): boolean => false;

    isHaveSoffa = (): boolean => false;
}

export default Livingroom;
