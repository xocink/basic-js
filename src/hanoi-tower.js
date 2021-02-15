const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let count_turns = (2**disksNumber)-1;
  let sec_per_turn = 3600/turnsSpeed;
  let final_time = Math.floor(count_turns * sec_per_turn)
  return { turns : count_turns, seconds : final_time}
  // remove line with error and write your code here
};
