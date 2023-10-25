// here the micro task priority is nexttick queue, promise queue and cehck the timer queue if anything not avilable in timer queue, it will go to the i/o queue.

// I/O queue store the fs ,os modules works.

const fs = require("fs");

// excirecise 1

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// fs.readFile(__filename, () => {
//   console.log("reading file");
// });
// process.nextTick(() => {
//   console.log("console nexttick 1");
// });
// Promise.resolve().then(() => {
//   console.log("promise queue");
// });

// excirecise 2

// fs.readFile(__filename, () => {
//   console.log("reading file");
// });

// Promise.resolve().then(() => {
//   console.log("promise queue");
// });

// process.nextTick(() => {
//   console.log("console nexttick 1");
// });

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// excircise 3

fs.readFile(__filename, () => {
  console.log("reading file");
});

Promise.resolve().then(() => {
  console.log("promise queue");
});

process.nextTick(() => {
  console.log("console nexttick 1");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

setImmediate(() => {
  console.log("immidiate");
});

// console nexttick 1
// promise queue
// timeout
// immidiate
// reading file
