// here the micro task priority is nettick queue, promise queue and timer queue

// // excirecise 1
// setTimeout(() => console.log("1"), 0);
// setTimeout(() => console.log("2"), 0);
// setTimeout(() => console.log("3"), 0);

// process.nextTick(() => {
//   console.log("nexttick queue");
// });

// process.nextTick(() => {
//   console.log("nexttick queue2");
//   process.nextTick(() => {
//     console.log("nexttick queue inner");
//   });
// });
// process.nextTick(() => {
//   console.log("nexttick queue3");
// });

// Promise.resolve().then(() => {
//   console.log("promise queue 1");
// });

// Promise.resolve().then(() => {
//   console.log("promise queue 2");
//   process.nextTick(() => {
//     console.log("nexttick queue inner promise");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("promise queue 3");
// });

// ----------------------------------------------

// excirecise 1
setTimeout(() => console.log("1"), 0);
setTimeout(() => {
  console.log("2");
  process.nextTick(() => {
    console.log("nexttick queue in timer");
  });
}, 0);
setTimeout(() => console.log("3"), 0);

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
