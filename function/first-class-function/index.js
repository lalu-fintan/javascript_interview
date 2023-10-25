// function is a set of statement take a input and do some logical computation works,then produce the output

//1.function statement

function a(a, b) {
  return a + b;
}
console.log(a(2, 3));
console.log(a(6, 3));

// 2. function expression

let b = function (a, b) {
  return a * b;
};
console.log(b(6, 3));
console.log(a(3, 7));

// 3.anonymous function
let c = function () {
  console.log("c");
};

// 4.named function expression

let m = function xy() {
  console.log("hello");
};

// xy();

// ReferenceError: xy is not defined

// 5. IIFE(Imidiate Invoked Function )

(function () {
  let y = "Hello";
  console.log(y);
})();
