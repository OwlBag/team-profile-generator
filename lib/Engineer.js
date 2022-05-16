const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(name, id, email, num) {
        super(name, id, email, num);
    }
}

module.exports = Engineer;