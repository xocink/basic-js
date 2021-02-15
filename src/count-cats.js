const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let counter = 0
      matrix.forEach(el => el.forEach(item => {
    if (item ==='^^') {
      counter +=1
    }else true
  } ))
  return counter
};
