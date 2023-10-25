// closure  - it's combination of the function bundle together with reference to the  sorrounding lexical enviroinment.
// simply - if we access the outer functions variables in inner function

// lexical scoping -

function outerFunc() {
  let x = 10;

  function inner() {
    console.log(x);
  }
  inner();
}

outerFunc();

// 2. example

const m = () => {
  let a = 20;
  return (newFunc = () => {
    console.log(a);
  });
};

const n = m();
console.log(n());

// uses of closure

{
  /**
1.currying javascript possible ,because of clouser.
2.


*/
}

const num1 = () => {
  let d = 200;

  const num2 = () => {
    let e = 34;
    console.log(d);
    const num3 = () => {
      console.log(e);
    };
    num3();
  };
  num2();
};

num1();

// exapmple4
const var1 = (a) => {
  let c = "hello";

  const var2 = () => {
    console.log("hello2");

    setTimeout(() => {
      console.log(c);
    }, 2000);
    console.log(a);
  };
  return var2;
};

// so here we return one function so if we call the function ,it will not show ,so we need to pass the refrence,then we call the refrence ,it will show the result

const newVal = var1("lalu");
newVal();

function secretPassword() {
  let password = "lalu@123";
  return {
    guessPassword: function (guess) {
      if (guess === password) {
        return true;
      } else {
        return false;
      }
    },
  };
}

let passVal = secretPassword();

passVal.guessPassword("lalu@123");

{
  /**
   Advantages of closures:
* Callbacks implementation in javascript is heavily dependent on how closures work
* Mostly used in Encapsulation of the code
* Also used in creating API calling wrapper methods


Disadvantages of closures:
* Variables used by closure will not be garbage collected
* Memory snapshot of the application will be increased if closures are not used properly

   */
}

// interview tasks

function newFunc() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000);
  }

  console.log("hello");
}

// newFunc();

{
  /**

output is :
 1
 2
 3
 4
 5

 why means here ,the let keyword refrence is in every itreation create a one new variable memory location in the block .like i=1,i=2.
*/
}

function newFunc2() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000);
  }

  console.log("hello");
}

// newFunc2();

{
  /**

output is :
 
6
6
6
6
6

but in here it will not create like a new one just iterate and store the var in same memory location.
*/
}

const newFunc3 = () => {
  for (let i = 1; i <= 5; i++) {
    const close = (x) => {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    };
    close(i);
  }
};

newFunc3();

{
  /**

output is :
 1
 2
 3
 4
 5

 if we want to the close task in var keywork ,this is the method
*/
}
