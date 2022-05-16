const Employee = require('./Employee.js')

class Manager extends Employee{
    constructor(name, id, email, num) {
        super(name, id, email, num);
    }
}

module.exports = Manager;