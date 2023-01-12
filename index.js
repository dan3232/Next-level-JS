function addressMaker(address) {
    const { city, state } = address;
    const newAddress = {
        city,
        state,
        country: "USA"
    };

    console.log(newAddress);
}

addressMaker({city: "Austin", state: "Texas"})


let fullName = "Daniel Mera"
let total = 0;

for (const char of fullName) {
    console.log(char);
}

const students = [
    {name: "John", city: "New York"},
    {name: "Peter", city: "Paris"},
    {name: "Katy", city: "Sidney"}
]

for (const student of students) {
    const { name, city } = student;
    console.log(`${name} lives in ${city}`);
}

let shoppingList = ["eggs", "milk", "butter"];

let shoppingBasket = [...shoppingList, "fruits", "cereal"];

console.log(shoppingBasket);

const buying = (food = "something") => console.log(`I'm going to buy ${food} from the grocery shop`);

buying("cocacola");

const listIngredients = ["flour", "sugar", "eggs", "butter"];

if (listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake");
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}

import { add } from './data.js';

let result = add(3, 2);

console.log(result);

let example = "Daniel Mera"

console.log(example.padStart(5, M));

import { Animal, Cat } from "./data.js";

let cat = new Cat("Felino", 4);

cat.makeNoise();
cat.type = 3;
console.log(cat.legs);

console.log(Animal.return10());
cat.makeNoise()

// Create a class Player with the following:
// - Add a Name and Country properties
// — Add a function that when it runs should print into the console ("Messi was born in Argentina") ;
// Make sure to adapt this function to receive dynamic Names and Clubs.
// Create a Subclass called Tenni sPIayer that extends from the class Player
// Add a new property Age.
// Add a function that when it runs should print into the console something similar ("Rafael Nadat
// is 34 years old and knows how to play Tennis") ;
// Make sure the Name and Age are dynamic.

import { Player, TennisPlayer } from "./data.js";

let messi = new Player("Messi", "Argentina");

messi.nacimiento();

let rafael = new TennisPlayer("RAfael Nadal","sweden", 34);

rafael.info();
rafael.nacimiento();

function palindrome(str) {
    
    let splitIt = (str.toLowerCase()).split("");
    let first = splitIt.join()
    console.log(first);
    let splitReverse = splitIt.reverse()
    let second = splitReverse.join()
    console.log(second);
    
    if (first === second) {
        return true;
    } else {
        return false;
    }
}

palindrome("AaBaa")

function encloseInBrackets(str) {
    const add = "(" + str + ")";

    console.log(add);

}

encloseInBrackets("alababa")

function factorialNumber(numb) {
    let result = 1
    for (let i = 1; i <= numb; i++) {
       result *= i
       console.log(result);
    }
}

factorialNumber(5);

function firstDigit(str) {
    let splited = str.split("")
    const numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    for (let i = 0; i < splited.length; i++) {
       if (numb.includes(splited[i])) {
            console.log(splited[i]);
            break
       }
    }

}

firstDigit("estripat9m4ric4");

function largestNumber(num) {
    const nine = "9";
    let result = "0";
    for (let i = 0; i < num; i++) {
        result += nine
    }
    console.log(parseInt(result));
}

largestNumber(2);

function maxMultiple(divisor, bound) {
    let maximun = ""
    for (let i = 1; i <= bound; i++) {
        if (i % divisor === 0) {    
        maximun = i   
        }
    }
    console.log(maximun);

    const remainder = bound % divisor;

    console.log(bound - remainder);
}

maxMultiple(5, 57);