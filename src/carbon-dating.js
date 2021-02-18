const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
      if (arguments.length === 0 || typeof sampleActivity !== 'string') {
        return false;
    }
    sampleActivity = +sampleActivity;
    if (sampleActivity <= 0 || sampleActivity >= 15 ){
        return false;
    }
    if (isNaN(sampleActivity)) {
        return false;
    }

    let rate = 0.693 / HALF_LIFE_PERIOD;

    let age = Math.log(MODERN_ACTIVITY / sampleActivity) / rate;
    return Math.ceil(age)
//   throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
