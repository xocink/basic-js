const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    if (typeof str != 'string') {
        str = String(str);
    }
    // options.addition = options.addition ?? '';
    if (options.hasOwnProperty('addition')) {
        if (typeof options.addition !== 'string') {
            options.addition = String(options.addition)
        }
    }

    if (options.repeatTimes !== null && options.repeatTimes !== undefined) {
        options.repeatTimes = options.repeatTimes
    } else {
        options.repeatTimes = 1
    }

    if (options.additionRepeatTimes !== null && options.additionRepeatTimes !== undefined) {
        options.additionRepeatTimes = options.additionRepeatTimes
    } else {
        options.additionRepeatTimes = 1
    }

    if (options.separator !== null && options.separator !== undefined) {
        options.separator = options.separator
    } else {
        options.separator = '+'
    }

    if (options.additionSeparator !== null && options.additionSeparator !== undefined) {
        options.additionSeparator = options.additionSeparator
    } else {
        options.additionSeparator = '|'
    }


    function getAdditionString() {
        let addString = [];
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            addString.push(options.addition);
        }
        return addString.join(options.additionSeparator);
    };

    function getExtendedString() {
        return str + getAdditionString();
    }


    function getFinalString() {
        let finalArr = [];
        for (let i = 0; i < options.repeatTimes; i++) {
            finalArr.push(getExtendedString());
        }
        return finalArr.join(options.separator);
    }

    return getFinalString();

    // throw new CustomError('Not implemented');
};
  
