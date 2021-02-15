const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(members)) {
        function clearwhitespace() {
            let new_arr = []
            members.forEach(item => {
                if (typeof item === 'string') {
                    item = item.trim()
                    new_arr.push(item[0].toUpperCase())
                } else true

            })
            return new_arr
        }

        return clearwhitespace().sort().join('')
    }else return false
};
