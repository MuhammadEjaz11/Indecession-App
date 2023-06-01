class Person {
    constructor(name = "anonymous",age = 0){
        this.name = name;
        this.age = age;
    };
    getGreetings(){
        return `Hi! this is ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old `
    }
    

};
class Traveler extends Person{
    constructor(name,age, location){
        super(name,age)
        this.location = location
    }
    getGreetings(){
        let greetings = super.getGreetings();
        if(this.location){
            return greetings += `I am Visiting from ${this.location}`
        }else{
            return greetings
        }
    }


}

const me = new Traveler("Ejaz",23,"Karachi");
const us = new Traveler("Ejaz",23);
console.log(me.getGreetings())
console.log(us.getGreetings())

