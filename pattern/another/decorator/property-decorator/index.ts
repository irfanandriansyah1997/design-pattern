import { Integer } from './decorator/property-decorator';

class Employee {
    @Integer(false)
    public age = 0;
}

const emp = new Employee();
emp.age = 10;

emp.age = 11;

console.log(emp.age);
for (const prop in emp) {
    console.log(`enumerable property = ${prop}`);
}
