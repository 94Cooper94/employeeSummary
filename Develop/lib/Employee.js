// TODO: Write code to define and export the Employee class
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
};

module.exports = Employee;