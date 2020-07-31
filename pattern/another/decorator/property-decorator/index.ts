import { Integer } from './decorator/property-decorator';

class Employee {
    @Integer(false)
    public age: number = 0;
}

const emp = new Employee();
emp.age = 10;

emp.age = 11;

console.log(emp.age);
for (let prop in emp) {
    console.log(`enumerable property = ${prop}`);
}
