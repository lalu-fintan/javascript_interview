const radius = [3, 5, 1, 2];

// const calculateArea = (radius) => {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

const area = (radius) => {
  return Math.PI * radius * radius;
};
const circumfrence = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumfrence));
console.log(calculate(radius, diameter));

// 1. As a argument

const func = (value) => {
  console.log("value1");
  value();
};

const func1 = () => {
  console.log("value2");
};
console.log(func(func1));

// 2. return the function

const newFunc = () => {
  return function () {
    console.log("hello");
  };
};
const val = newFunc();
console.log(val());
