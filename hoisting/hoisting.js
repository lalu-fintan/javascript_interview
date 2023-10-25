// just call the variable or function before the decalration.

// variable hoisting
function test() {
  console.log(z);
}

// test();

const z = 30;
var x = 12;
let y = 10;

// function hoisting

// If you are create the named function the function will work ,otherwise it will not work

first(); //here it show the output ,because it's anamed function
second(); //throwing error  ReferenceError: Cannot access 'second' before initialization
third(); //ReferenceError: Cannot access 'third' before initialization
function first() {
  console.log("hello");
}

const second = function () {
  console.log("hello 2");
};

const third = () => {
  console.log("hello 3");
};
