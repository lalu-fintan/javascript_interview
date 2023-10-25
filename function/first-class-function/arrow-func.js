// 1.

let user = {
  name: "laluprasath",
  greet1: function () {
    console.log(`hello ` + this.name);
  },
  greet2: () => {
    console.log(`hi` + this.name);
  },
};

user.greet1(); //hello laluprasath
user.greet2(); //hiundefined

// 2.
const argFunc = () => {
  console.log(arguments);
};

// argFunc(1, 2, 3, 4);// arguments is not defined arguments is not defined

function argFunc2() {
  console.log(arguments);
}
argFunc2(1, 2, 3, 4, 5); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// 3.

let x = new (function () {
  console.log("hello");
})();

// let y=new()=>{
//     console.log('world');
// };// thoroing the error

// 1. arrow function doesn't have own this constructor.
// 2. arrow function doesn't get all the arguments
// 3.arrow function doesn't accept the constructor
