import enumerable from './decorator/accessor-decorator';

class Employee {
    private _salary = 0;
    private _name = '';

    @enumerable(false)
    get salary(): string {
        return `Rs. ${this._salary}`;
    }

    set salary(salary: string) {
        this._salary = +parseInt(salary, 10);
    }

    @enumerable(true)
    get name() {
        return `Sir/Madam, ${this._name}`;
    }

    set name(name: string) {
        this._name = name;
    }
}

const emp = new Employee();
emp.salary = '1000';
for (const prop in emp) {
    console.log(`enumerable property = ${prop}`);
}
