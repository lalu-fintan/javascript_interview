setTimeout(
  (name) => {
    console.log(`hello ${name}`);
  },
  2000,
  "lalu"
);

let num = 0;

const intervalId = setInterval(() => {
  num++;
  if (num >= 10) {
    clearInterval(intervalId);
  } else {
    clearTimeout(timeoutId);
    x();
  }
  console.log("hello", num);
}, 2000);

let timeoutId = null;

let x = () => {
  timeoutId = setTimeout(() => {
    console.log(1);
  }, 2000);
};
