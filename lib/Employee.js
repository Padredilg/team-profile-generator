class Employee{
    constructor() {
        this.name = getName();
        this.id = getId();
        this.email = getEmail();
    }  

    getName(){
        console.log("getName was used")
        //Include logic to collect info and return it
        return 'Name';
    }

    getId(){
        console.log("getId was used")
        //Include logic to collect info and return it
        return;
    }

    getEmail(){
        console.log("getEmail was used")
        //Include logic to collect info and return it
        return;
    }

    getRole(){
        console.log("getRole was used")
        //Include logic to collect info and return it
        return 'Employee';
    }
}