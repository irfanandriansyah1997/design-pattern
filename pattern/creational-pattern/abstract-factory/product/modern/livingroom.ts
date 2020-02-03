import { AbstractLivingRoom } from '../../intefaces/component.interface';

class Livingroom implements AbstractLivingRoom {
    lengthRoom: number = 40;

    widthRoom: number = 40;

    isHaveChair = (): boolean => false;

    isHaveTV = (): boolean => false;

    isHaveRugs = (): boolean => false;

    isHaveSoffa = (): boolean => false;
}

export default Livingroom;