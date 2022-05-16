class Employee{
    constructor(name, id, email, num) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.num = num;
    }

    getInfo() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            num: this.num
        }
    }
};

module.exports = Employee;