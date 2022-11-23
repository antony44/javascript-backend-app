let helloWorld = 'hello';
helloWorld += ' world!';
console.log(helloWorld);

const http = require('http'); //import module "http"

// mymodule1 = require('./modules/module1');
// mymodule1.

// const name = 'Mike Taylor'

const greeting = require('./modules/greeting');
const person = require('./modules/person');
const {name, car} = require('./modules/person');

greeting(name);

console.log(person.name, person.car);
console.log(name, car);