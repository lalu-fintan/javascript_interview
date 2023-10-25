// Promise  -that is objection asynchronous call. whch means it have two property resolve and reject

// the api data get it goes to the resolve otherwise it goes to reject part

const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1");
  }, 2000);
});

x.then((a) => {
  console.log("success", a.res);
}).catch(() => {
  console.log("failed");
});

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todose/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(() => console.log("failed"));
};

getData();
