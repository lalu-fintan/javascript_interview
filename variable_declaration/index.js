// block  - it combined multiple javascript code into a group.
// block scope -what are the varible called inside the block.
// ex:

if (true) {
  // block
  var age = 21; // global scope
  let name = "laluprasath";
  const isAlive = true;
  //   console.log(name);
  //   console.log(age);
  //   console.log(isAlive);
}

// console.log(name); //refrence error,because this not avilable in global scope.

// shadowing - it just storing the variable in memory.
// var only shadow the varibal's in the js,means the both newAge  varible are store in the same memory location
// but the newName and isAlive globally it store one memory location and localy it was stored one memory location.

var newAge = 21;
let newName = "laluprasath";
const isAlive = false;

if (true) {
  var newAge = 30;
  let newName = "lalu";
  const isAlive = true;
  console.log(newAge); //30
  console.log(newName); // lalu
  console.log(isAlive); //true
}

console.log(newAge); //30
console.log(newName); // laluprasath
console.log(isAlive); //false

// lexical scope -that enviroinment
const m = 100;

{
  const m = 200;
  {
    const m = 300;
    console.log(m);
  }
}

// this is lexiacl scope which means if we call the m inside block it show 300, but in parent blog it shows 200, then globally 100.
