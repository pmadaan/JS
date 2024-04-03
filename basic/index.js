// comment
console.log('hello ji');

let name = 'PM';
console.log(name);

let fN='Priyanka', lN;
console.log(fN);

const a = "b";

let age = 33;
let single = false;
let something = null;
let somethingElse = undefined;

console.log(age, single, something, somethingElse);

console.log(somethingElse);
console.log(typeof somethingElse)

somethingElse = 'abc';
console.log(somethingElse);
console.log(typeof somethingElse)

somethingElse = 20.5;
console.log(somethingElse);
console.log(typeof somethingElse)

//object literal {}
let person = {
    name: 'PM',
    age: 30
}; 
console.log(person);

// Dot notation
person.age = 31;
console.log(person);

// Bracket notation
person['name'] = 'gm';
console.log(person);

// Bracket notation index can be var
let prop = 'name';
console.log(person[prop]);

// Array literal [] 
let colors = ['red', 1, null];
console.log(colors);
console.log(colors[1]);

// length is also dynamic
colors[3] = 'blue';
console.log(colors);

console.log(typeof colors);
console.log(colors.length);

greet(person.name);
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}
greet('pm', 'gm');


function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
console.log(square(3));