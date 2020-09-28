const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, phone, linkedin) {
        super(name, id, email, phone);
        this.linkedin = linkedin;
    };

    empLinkedin() {
        return(this.linkedin);
    };
        
    empRole() {
        return "Intern"; 
    };
}


module.exports = Intern;