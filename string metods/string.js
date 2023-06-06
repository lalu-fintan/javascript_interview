const firstName = "lalu";
const lastName = "prasath";
const fullName = "lalu prasath ";
const length = firstName.length;
const char = firstName.charAt(1); // use for find this charecter in a index
const concat = firstName.concat(" ", lastName, " ", "G"); //to concatinate the two are more string
const include = fullName.includes("lu"); //to check is that in this var or not(boolean), tis one is case sensitive
const start = firstName.startsWith("la"); //to check the string start with this word or not(boolean)
const end = firstName.endsWith("lu"); //to check the string end  with this word or not(boolean)
const index = fullName.indexOf("a"); //to find the index value of this charecter
const lastIndex = fullName.lastIndexOf("a"); //to find the lastindex value of this charecter
const repeat = fullName.repeat(4); // to repeat this string 4 times
const replace = fullName.replace("lalu", "narenthar"); //to replace the string value, and it's not affected the fullname variable.
const slice = fullName.slice(2, 6); //to slice te string ,to give start and end
const split = fullName.split(" ", 1); //to split the string
const substr = fullName.substr(5); //to get the string in the variable ,based on the length
const lowerCase = fullName.toLowerCase(); //to convert all the charecter to lowercase
const upperCase = fullName.toUpperCase(); ////to convert all the charecter to uppercase
const trim = fullName.trim(); // if you want to avoid the extra spaces to use trim.trimStart and trimEnd,trim

console.log(typeof firstName);
console.log(length); //property
console.log(char); // these all are methods
console.log(concat);
console.log(include);
console.log(start);
console.log(end);
console.log(index);
console.log(lastIndex);
console.log(repeat);
console.log(replace);
console.log(slice);
console.log(split);
console.log(substr);
console.log(lowerCase);
console.log(upperCase);
console.log(trim);

const obj = [
  { name: "lalu", age: 21 },
  { name: "vijay", age: 22 },
];
