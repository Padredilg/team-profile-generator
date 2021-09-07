class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }  

    getName(){
        //Include logic to collect info and return it
        return this.name;
    }

    getId(){
        //Include logic to collect info and return it
        return this.id;
    }

    getEmail(){
        //Include logic to collect info and return it
        return this.email;
    }

    getRole(){
        //Include logic to collect info and return it
        return "Employee";
    }
}

module.exports = Employee;