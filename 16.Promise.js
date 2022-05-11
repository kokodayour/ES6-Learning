// 1. 获取"读取文件"模板
const fs = require("fs");
// 2. 读取文件
fs.readFile("./demo.text", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
