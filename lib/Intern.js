// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, phone, linkedin) {
        super(name, id, email, phone);
        this.linkedin = linkedin;
    };

    empLinkedin() {
        return(this.linkedin);
    };
}


module.exports = Intern;