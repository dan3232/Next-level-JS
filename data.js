export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "Loud Noise") {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }

    static return10() {
        return 10;
    }
}        

export class Cat extends Animal {
    // constructor (type, legs, tail) {
    //     super(type, legs);
    //     this.tail = tail;
    // }
    makeNoise(sound = "Meow") {
        console.log(sound);
    }  
}

// Create a class Player with the following:
// - Add a Name and Country properties
// — Add a function that when it runs should print into the console ("Messi was born in Argentina") ;
// Make sure to adapt this function to receive dynamic Names and Clubs.
// Create a Subclass called Tenni sPIayer that extends from the class Player
// Add a new property Age.
// Add a function that when it runs should print into the console something similar ("Rafael Nadat
// is 34 years old and knows how to play Tennis") ;
// Make sure the Name and Age are dynamic.


export class Player {
    constructor (name, country) {
        this.nombre = name;
        this.pais = country;
    }

    nacimiento () {
        console.log(`${this.nombre} was born in ${this.pais}`);
    }
}

export class TennisPlayer extends Player {
    constructor (name, country, age) {
        super(name, country)
        this.edad = age;
    }

    info() {
        console.log(`${this.nombre} is ${this.edad} years old and knows how to play Tennis`);
    }
}