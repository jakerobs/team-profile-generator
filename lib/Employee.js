class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    // methods to return specific employee data
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    // this method is overridden by other classes
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;