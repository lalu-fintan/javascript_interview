// scope  - simply says it 's refers to avilability of variable ,
// there are two types ,global and local or function scope.
// global variables can be accessed anywhere in the program, but they have limited access .

// first the function will check any local scope avilable or not ,if it is not avilable ,then automatically take the global scope

// global scope= var
// local scope=let,const

var name = "lalu";
let age = 12;

function variableDec() {
  let name = "muthu";
  let age = 10;
  console.log(name);
  console.log(age);

  function variableDec2() {
    let age = "19";
    console.log(name);
    console.log(age);
  }
  variableDec2();
  console.log(age);
}

{
  /**
muthu
10
muthu
19
10
*/
}

// variableDec();

const name1 = "lalu";

function variableDec2() {
  const name1 = "muthu";
  const age1 = 10;
  console.log(name1);
  console.log(age);

  function variableDec2() {
    const age = "19";
    console.log(name1);
    console.log(age1);
  }
  variableDec2();
  console.log(age);
}

variableDec2();

function greetUser() {
  const message = "hello world";
  log(message);
}

greetUser(); //hello world
// If I do the same thing in arrow or anonymous function it shows undiffined
function log(message) {
  console.log(message);
}

// var vs let

function displayNumbers() {
  for (let i = 0; i <= 10; i++) {
    console.log("hello" + i);
  }
  //   console.log(i); //it throwing erorr ,like its undiffined

  for (j = 0; j <= 10; j++) {
    console.log("hello" + j);
  }
  console.log(j); //11 ,because automatically it dclare var
}

// displayNumbers();

function displayNumbers2() {
  if (true) {
    var val = "lalu";
    console.log(val);
  }
  console.log(val); //lalu, if you are using let or const ,it will throw the error
}

displayNumbers2();
