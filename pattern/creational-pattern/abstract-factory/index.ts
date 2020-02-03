import clientCode from './client-code';
import HouseModern from './product/modern/house-modern';
import HouseClassic from './product/classic/house-classic';

console.log(clientCode(new HouseClassic()));
console.log(clientCode(new HouseModern()));