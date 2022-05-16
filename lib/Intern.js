const Employee = require('./Employee.js')

class Intern extends Employee{
    constructor(name, id, email, num) {
        super(name, id, email, num);
    }
}

module.exports = Intern;