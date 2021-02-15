const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    try {
        date.getTime()
    } catch (error) {
        throw new Error(error)
    }
    let new_date = new Date(date)
    let month = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
    let currentMonth = new_date.getMonth()
    return month[currentMonth]
};
