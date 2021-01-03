import {
    HouseFactory,
    clientCodeResponseInterface
} from './intefaces/component.interface';

const clientCode = ({
    bedRoom,
    livingRoom,
    roomType
}: HouseFactory): clientCodeResponseInterface => ({
    bedroom: {
        bedMerk: bedRoom().bedMerk(),
        isHaveTV: bedRoom().isHaveTV(),
        isHaveChair: bedRoom().isHaveChair(),
        lengthRoom: bedRoom().lengthRoom,
        widthRoom: bedRoom().widthRoom
    },
    livingroom: {
        isHaveRugs: livingRoom().isHaveRugs(),
        isHaveSoffa: livingRoom().isHaveSoffa(),
        isHaveTV: livingRoom().isHaveTV(),
        lengthRoom: livingRoom().lengthRoom,
        widthRoom: livingRoom().widthRoom
    },
    roomType: roomType()
});

export default clientCode;
