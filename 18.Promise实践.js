const fs = require("fs");
const p = new Promise((resolve, reject) => {
  fs.readFile("./demo1.txt", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});
p.then(
  (value) => {
    return new Promise(function (resolve, reject) {
      fs.readFile("./demo2.txt", (err, data) => {
        resolve([value, data]);
      });
    });
  },
  (err) => {
    console.log(err);
  }
)
  .then(
    (value) => {
      return new Promise(function (resolve, reject) {
        fs.readFile("./demo3.txt", (err, data) => {
          value.push(data);
          resolve(value);
        });
      });
    },
    (err) => {}
  )
  .then(
    (value) => {
      console.log(value.join("\r\n"));
    },
    (err) => {}
  );
