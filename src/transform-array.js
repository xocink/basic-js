const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
      if (Array.isArray(arr) === false) {
        throw new Error("THROWN");
    }

    let work_arr = [...arr];
    if (work_arr.length === work_arr.filter(simpleCheck).length) {
        return work_arr;
    } else return ModArr(work_arr);

    function ModArr(work_arr) {
        let test_array = [];
        let discard_next_check = 0;
        let double_next_check = 0;
        for (let i = 0; i < arr.length; i++) {

            test_array.push(arr[i]);
            if (discard_next_check == 1) {
                test_array.pop();
                discard_next_check -= 1;
            }


            if (double_next_check == 1) {
                test_array.push(arr[i]);
                double_next_check -= 1;
            }
            let last = test_array.length - 1;

            if (test_array[last] === '--discard-prev') {
                test_array.pop();
                if (test_array.length === 0) continue;
                test_array.pop();
            }
            if (test_array[last] === '--double-prev') {
                test_array.pop();
                test_array.push(test_array[test_array.length - 1]);
            }
            if (test_array[last] === '--discard-next') {
                test_array.pop();
                discard_next_check += 1;
            }
            if (test_array[last] === '--double-next') {
                test_array.pop();
                double_next_check += 1;
            }
        }
        return test_array.filter(undefDel)
    }

    function simpleCheck(value) {
        if (typeof value !== 'number') {
            return false;
        } else return true;
    }

    function undefDel(value){
        if (value === undefined){
            return false;
        }else {
            return true;
        }
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
};
