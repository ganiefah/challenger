class Person{
    #firstName = "";
    constructor(firstName){
        this.#firstName = firstName
    }
    walk(){
        console.log(`${this.#firstName} is walking`);
    }
    dancing(){
        console.log(`${this.#firstName} is dancing`);
    }
}

const person1 = new Person(`Ganiefah`)
person1.walk()

const person2 = new Person (`Laiquah`)
person2.dancing()

// console.log(person1.firstName);