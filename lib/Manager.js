const Employee = require('./Employee.js')

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    // Override getRole() inherited from Employee class
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager;