("use strict");
// javascript variable lifecycle
let a; // Declaration
a = 100; // Assignment
console.log(a); // Usage

// variable hoisting -----------------------------------------------------------------------

// console.log(y); //undifined
var y = 10;

{
  /*

  the variable hoisting only work on global scope, it not suitable for block scope

In the above case ,
javascript interpreter split the variable like,
var y;
console.log(y);
y=10

but I you are console any undifined variable , it will throw the error,
console.log(z) //ReferenceError: z is not defined

*/
}

// let and const --------------------------------------------------------

// console.log(z);
let z = 10; //ReferenceError: Cannot access 'z' before initialization

// console.log(m);
// console.log(n)
const n = 10;

let m = 10;

// function hoisting  -------------------------------------------------------------------

getValue(); //hello

function getValue() {
  console.log("hello");
}

{
  /**
the intrepreter consider  the named function ,below like this
function getValue(){
    console.log('hello');
}
getValue()

// but If we using anonymous and arrow function , it's throwing error.
*/
}

// getValue1(); //ReferenceError: Cannot access 'getValue1' before initialization

let getValue1 = function () {
  console.log("hello 2");
};

// getValue2(); //ReferenceError: Cannot access 'getValue2' before initialization

const getValue2 = () => {
  console.log("hello3");
};

// to avoid the hoisting use strict

// use strict

console.log(newOne);
var newOne = 21;

getValue();
function getValue() {
  console.log("newONe");
}

// issues in hoisting

// line no 43,already I created the getValue name function ,but I consoled differend thigs, but it show the output last functions console only in 2functions output

getValue();
function getValue() {
  console.log("newONe");
}

// let getValue6 = () => {
//   console.log("hello");
// };
//Cannot redeclare block-scoped variable 'getValue6

// let getValue6 = () => {
//   console.log("hello");
// };

var newONe = 21;
console.log(newOne);
var newONe = 40;
console.log(40);

// here the I declare the same variable in two times but assign diff values to both.it show the out 40

// local scope
// let x=30
let x = 40; //Cannot redeclare block-scoped variable 'x'.
console.log(x);

// to avoid the hoising use "use strict" key word form the top
