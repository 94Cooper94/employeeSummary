class Employee {
    constructor(name, id, email, phone) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
    };

    empName() {
        return(this.name)
    };

    empId() {
        return(this.id)
    };

    empEmail() {
        return(this.email)
    };

    empPhone() {
        return(this.phone)
    };
    
    empRole() {
        return "Employee"; 
    };
};

module.exports = Employee;