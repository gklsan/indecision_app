class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreetings(){
        return `Hi I'm ${this.name}!!!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major
    }

    getDescription() {
    let desc = super.getDescription();
        if(this.hasMajor()){
            desc += ` Their major is ${this.major}`
        }
    return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    // THis is not reguire because no default value
    // hasHomeLocation(){
    //     return !!this.homeLocation;
    // }

    getGreetings(){
        let greeting = super.getGreetings();
        // if(this.hasHomeLocation()){
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Student('Gokul P', 28, 'MCA');
console.log(me.getGreetings());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreetings());
console.log(other.getDescription());

const traveler1 =  new Traveler('Gokul P', 28, 'Erode');
console.log(traveler1.getGreetings());

const traveler2 =  new Traveler();
console.log(traveler2.getGreetings());