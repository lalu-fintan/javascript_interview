let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// set
function removeDuplicates2(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates2(arr));
