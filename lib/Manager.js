const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, phone, office) {
        super(name, id, email, phone);
        this.office = office;
    };
    
    empOffice() {
        return(this.office);
    };
        
    empRole() {
        return "Manager"; 
    };
};


module.exports = Manager;