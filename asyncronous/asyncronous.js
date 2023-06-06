// console.log("task1");
// console.log("task2");
// console.log("task3");
//if I do this it shows the output sequentially. this is syncronous code ,that was execte after line by line.

console.log("operation start");

// function sleep(milliSeconds) {
//   let startTime = new Date().getTime();
//   console.log("operation is running");
//   while (new Date().getTime() < startTime + milliSeconds) {
//     console.log("in progress");
//   }
//   console.log("operation done");
// }

// sleep(1000);

// console.log("do something else...");

//this is syncronous code ,like the done do something will show after the finish the in progress

function sleep(milliSeconds) {
  console.log("operation is running");
  setTimeout(() => {
    console.log("in progress");
  }, milliSeconds);
  console.log("operation done");
}

sleep(2000);

console.log("do something else...");

//but this execute like see the first console and go to the second part on setTimeout, but it will not wait for 2 sec move on to the next console once all are execueted, it show the setTimeout console, this is called asyncronous

// this not wait for execution.
