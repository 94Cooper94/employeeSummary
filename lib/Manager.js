// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email, phone);
    };
};


module.exports = Manager;