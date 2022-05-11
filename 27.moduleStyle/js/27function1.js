//export相当于public, 模块暴露给外部的数据和方法
//分别暴露方式
export const name = "wdk";
export const getName = () => {
  console.log(name);
};
