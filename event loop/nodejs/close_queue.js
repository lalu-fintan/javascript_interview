// close queue will execute after all the queues execution.
const fs = require("fs");

const stream = fs.createReadStream(__filename);
stream.close();

stream.on("close", () => {
  console.log("file system");
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
  console.log("immidiate inner i/o");
});
