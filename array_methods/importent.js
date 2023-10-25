const item = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 45 },
  { id: 3, name: "sam", age: 32 },
  { id: 4, name: "jack", age: 51 },
  { id: 5, name: "peter", age: 31 },
  { id: 6, name: "smith", age: 22 },
];

// 1.filter

const filterElement = item.filter((item) => {
  return item.age <= 30;
});
// console.log(filterElement);//[ { id: 1, name: 'John', age: 30 }, { id: 6, name: 'smith', age: 22 } ]

// -----------------------------------------------

// 2.map -to iterate the array element

const mapElement = item.map((item) => {
  return item.name;
});

// console.log(mapElement);//[ 'John', 'Jane', 'sam', 'jack', 'peter', 'smith' ]

// --------------------------------------------------------

// 3.find

const findElement = item.find((item) => {
  return item.age === 30;
});

// console.log(findElement);//{ id: 1, name: 'John', age: 30 }

const findElement2 = item.findIndex((item) => {
  return item.age === 30;
});

// console.log(findElement2); //0

// -----------------------------------------------------------------------

// 4.forEach

item.forEach((item) => {
  //   console.log(`${item.name} age is ${item.age * 2}`);60 90 64 102 62 44
});

// ------------------------------------------------------

// 5.some - check the condition true or false, if any one is true it return the true

const findExpansive = item.some((item) => {
  return item.age >= 15;
});
// console.log(findExpansive); //true

// ----------------------

// 6.every -check the condition true or false, if any one is false it return the false,all the element need to true then only ut shows true

const findExpansive2 = item.every((item) => {
  return item.age >= 30;
});

// console.log(findExpansive2); //false

// ------------------------------

// 7.reduce to used for calculate the all the elements,it taks two parameter one is current value and then count value

const totalCal = item.reduce((curr, item) => {
  return item.age + curr;
}, 0);

// console.log(totalCal);

// -----------------------------------------------

// 8.includes -to check the the particular item is avilable or not in that array

const listItem = [1, 4, 2, 4, 1, 7, 5, 8];

// console.log(listItem.includes(2)); //true
