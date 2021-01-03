export type roomType = 'modern' | 'clasics';

/**
 * House Factory
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.02.03
 */
export interface HouseFactory {
    livingRoom(): AbstractLivingRoom;

    bedRoom(): AbstractBedRoom;

    roomType(): roomType;
}

/**
 * Abstract Room
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.02.03
 */
export interface AbstractRoom {
    isHaveTV(): boolean;

    widthRoom: number;

    lengthRoom: number;
}

/**
 * Abstract Bed Room
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.02.03
 */
export interface AbstractBedRoom extends AbstractRoom {
    bedMerk(): string;

    isHaveChair(): boolean;
}

/**
 * Abstract Living Room
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.02.03
 */
export interface AbstractLivingRoom extends AbstractRoom {
    isHaveSoffa(): boolean;

    isHaveRugs(): boolean;
}

/**
 * client code response
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.02.03
 */
export interface clientCodeResponseInterface {
    bedroom: {
        bedMerk: string;

        isHaveChair: boolean;

        isHaveTV: boolean;

        widthRoom: number;

        lengthRoom: number;
    };

    livingroom: {
        isHaveSoffa: boolean;

        isHaveRugs: boolean;

        isHaveTV: boolean;

        widthRoom: number;

        lengthRoom: number;
    };

    roomType: roomType;
}
