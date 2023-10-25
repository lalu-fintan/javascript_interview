//  * micro task queue we have 2 call back  functions next tick queu and promises queue.
// * alway the micro taks queue give the first priority to the next tick queue , then it goes to the promises queue.

// console.log("console 1");
// process.nextTick(() => {
//   console.log("console nexttick 1");
// });

// console.log("console 2");

// 1 expriment for micro-task queue
// Promise.resolve().then(() => {
//   console.log("promise queue");
// });

// process.nextTick(() => {
//   console.log("nexttick queue");
// });

// 2. expriment for micro task queue

process.nextTick(() => {
  console.log("nexttick queue");
});

process.nextTick(() => {
  console.log("nexttick queue2");
  process.nextTick(() => {
    console.log("nexttick queue inner");
  });
});
process.nextTick(() => {
  console.log("nexttick queue3");
});

Promise.resolve().then(() => {
  console.log("promise queue 1");
});

Promise.resolve().then(() => {
  console.log("promise queue 2");
  process.nextTick(() => {
    console.log("nexttick queue inner promise");
  });
});

Promise.resolve().then(() => {
  console.log("promise queue 3");
});
