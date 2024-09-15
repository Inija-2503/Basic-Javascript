//prototypes is someting that has additional properties which allows in adding less oriented properties


// how object works
/*let obj={   
    a:1
    b:"inija
}*/

//classes and use of this keyword

class Rabitt{
    constructor(name){
        this.name=name//this kw allows to create a property in the object
    }
    eats(){
        console.log("she eats well")
    }
    jump(){
        console.log("she jumps well")
    }
}
let a = new Rabitt("Bunny");
console.log(a.eats())
console.log(a.name)

//extends keyword to inherint the parent property
class lion extends Rabitt{
    constructor(name){
        super(name)//this kw allows to inherit the property from parent class
    }   // this shows method overloading
    eats(){ // methods
        console.log("he eats well")
    }
    jump(){
        console.log("he jumps well")
    }
}
let l = new lion("Shera");
console.log(l.eats())
console.log(l.name)

//static keyword
class Emp{
    static eEmp(){
        console.log("hey")
    }
}
Emp.eEmp()

//get and set

class User {
    constructor1(name1){
        this.name1=name1
    }
    get name1(){
        return this.__name1;
    }
    set name1(value){
        if (value.length<5){
            console.log("name is too short ")
            return;
        }
        this.__name1 = value;
    }
}

let user = new User("Inija");
console.log(user.name1);
//user.name1="Jeev"
//console.log(user.name1)

// use of instanceof keyword
 l instanceof lion