import { loggerWithArgument } from './decorator/method-decorator-with-argument';
import { loggerWithoutDecorator } from './decorator/method-decorator-without-argument';

class Employee {
    constructor(private firstName: string, private lastName: string) {}

    @loggerWithArgument('error')
    greetWithArgument(name: string, age: number): string {
        return `${this.firstName} ${this.lastName} says: ${name} and age ${age}`;
    }

    @loggerWithoutDecorator
    greetWithoutArgument(name: string, age: number): string {
        return `${this.firstName} ${this.lastName} says: ${name} and age ${age}`;
    }
}

const emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greetWithArgument('hello', 10);
emp.greetWithoutArgument('hello', 10);
