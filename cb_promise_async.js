// 1.callback
// callback - to get one function ad a parameter when the current function executed next the callback will execute.

// const User = [
//   { id: 1, name: "lalu" },
//   { id: 2, name: "muthu" },
// ];

// const getUser = () => {
//   User.forEach((user) => {
//     console.log(`${user.id}  ${user.name}`);
//   });
// };

// const createUser = (user, callback) => {
//   setTimeout(() => {
//     User.push(user);
//     callback();
//   },1000);
// };
// createUser({ id: 3, name: "mohan" }, getUser);

// getUser();

// 2.promises
//

const User = [
  { id: 1, name: "lalu" },
  { id: 2, name: "muthu" },
];

const getUser = () => {
  User.forEach((user) => {
    console.log(`${user.id}  ${user.name}`);
  });
};

const createUser = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      User.push(user);

      if (true) {
        res();
      } else {
        rej("Error");
      }
    }, 1000);
  });
};
createUser({ id: 3, name: "mohan kumar" })
  .then(getUser)
  .catch((e) => console.log(e));

//   async await

const createUser1 = (user) => {
  setTimeout(() => {
    User.push(user);
  }, 1000);
};

async function init() {
  await User.push({ id: 3, name: "vijay" });
  getUser();
}
init();
