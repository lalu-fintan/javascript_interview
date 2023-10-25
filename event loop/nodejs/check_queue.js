const fs = require("fs");
// tip if any i/o operations avilable in the micro queue and check queue, call at the same time , microtask queue task  tasks check queue then i/o queue.
// but if we call the setImmitate in inside of i/o queue, it takes first I/O queue oprations first.

//

// fs.readFile(__filename, () => {
//   console.log("reading file");
//   setImmediate(() => {
//     console.log("immidiate inner i/o");
//   });

//   Promise.resolve().then(() => {
//     console.log("promise queue");
//   });

//   process.nextTick(() => {
//     console.log("console nexttick 1");
//   });

//   setTimeout(() => {
//     console.log("timeout");
//   }, 0);
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

// setImmediate(() => {
//   console.log("immidiate inner i/o");
// });

// console nexttick 1
// promise queue
// timeout
// immidiate inner i/o
// reading file
// console nexttick 1
// promise queue
// immidiate inner i/o
// timeout

// if we call the micro queue and time queue tasks in inside of i/o queue, first it do the  i/o queue works.

// microtask queue s execute between th check queue  call backs

//

// setImmediate(() => {
//   console.log("immidiate inner 1");
// });

// setImmediate(() => {
//   console.log("immidiate inner 2");
//   process.nextTick(() => {
//     console.log("next tick 1");
//   });
//   Promise.resolve().then(() => {
//     console.log("promises");
//   });
//   fs.readFile(__filename, () => {
//     console.log("reading file");
//   });

//   setTimeout(() => {
//     console.log("timeout");
//   });
// });

// setImmediate(() => {
//   console.log("immidiate inner 3");
// });

// immidiate inner 1
// immidiate inner 2
// next tick 1
// promises
// immidiate inner 3
// timeout
// reading file

setTimeout(() => {
  console.log("timer");
}, 0);

setImmediate(() => {
  console.log("immidiate");
});

// timer
// immidiate
