const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

//     if (typeof str != 'string') {
//         str = String(str);
//     }
//     // options.addition = options.addition ?? '';
//     if (options.hasOwnProperty('addition')) {
//         if (typeof options.addition !== 'string') {
//             options.addition = String(options.addition)
//         }
//     }


//     options.repeatTimes = options.repeatTimes ?? 1;
//     options.additionRepeatTimes = options.additionRepeatTimes ?? 1;
//     options.separator = options.separator ?? '+';
//     options.additionSeparator = options.additionSeparator ?? '|';


//     function getAdditionString() {
//         let addString = [];
//         for (let i = 0; i < options.additionRepeatTimes; i++) {
//             addString.push(options.addition);
//         }
//         return addString.join(options.additionSeparator);
//     };

//     function getExtendedString() {
//         return str + getAdditionString();
//     }


//     function getFinalString() {
//         let finalArr = [];
//         for (let i = 0; i < options.repeatTimes; i++) {
//             finalArr.push(getExtendedString());
//         }
//         return finalArr.join(options.separator);
//     }

//     return getFinalString();
    // throw new CustomError('Not implemented');
};
  
