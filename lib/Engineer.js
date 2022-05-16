const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github
    }

    getGithub(){
        return this.github
    }

    // Override getRole() inherited from Employee class
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;