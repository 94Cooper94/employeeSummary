// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, phone, github) {
        super(name, id, email, phone);
        this.github = github;
    };

    empGithub() {
        return(this.github);
    };
}


module.exports = Engineer;