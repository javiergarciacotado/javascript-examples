//ES5
var string = "first part \
second part";

console.log(string); //first part second part

string = "first part\n \
second part";

console.log(string); //second part will be rendered in a new line

//ES6 

console.log(`first part 
second part`); //template literal allows multiline strings much simpler

//Interpolation

const customerName = "Javier García Cotado";
console.log(`customer name is ${customerName}`);
console.log(`customer name is ${1 + 2}`); //allows even expressions
console.log(`customer name is ${doSth() ? 'x' : 'y'}`); //allows even functions

function doSth() {
    return true;
} 
