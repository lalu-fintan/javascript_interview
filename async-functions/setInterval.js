// setInterval(
//   (name) => {
//     console.log(`hello ${name}`);
//   },
//   2000,
//   "lalu"
// );

// clear interval
let num = 0;

const intervalId = setInterval(() => {
  num++;
  if (num >= 10) {
    clearInterval(intervalId);
  }
  console.log("hello", num);
}, 2000);
