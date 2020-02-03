import CarBuilder from "./builder/car-builder";
import { CarProductInterface, MotorCycleInterface } from './interfaces/product.interface';
import MotorCycleBuilder from './builder/motorcycle-builder';
import SkylineProduct from './product/skyline-product';
import CBRProduct from './product/cbr-product';

const instanceCar: CarProductInterface = new CarBuilder(SkylineProduct)
    .setBreak('cakram')
    .setColor('white')
    .setEngine('cvt')
    .setSeats(5)
    .product;

const instanceMotorCycle: MotorCycleInterface = new MotorCycleBuilder(CBRProduct)
    .setBreak('cakram')
    .setColor('white')
    .setEngine('2 tak')
    .setSeats(1)
    .product;

console.log(instanceCar);
console.log(instanceMotorCycle);