module.exports = function transform(arr) {
    if(Array.isArray(arr)==false){
        throw Error("THROWN");
    }
    let result=[];
    let inner_arr = arr;
    let cord_seq = ["--discard-next","--discard-prev","--double-next","--double-prev"];
    for (let i=0; i<inner_arr.length; i++){
        if (inner_arr[i]=="--discard-next"){
            i++;
        } else if (inner_arr[i]=="--discard-prev"&&inner_arr[i-2]!="--discard-next"){
            result.pop();
        } else if (inner_arr[i]=="--double-next"&&inner_arr[i+1]!=undefined) {
            result.push(arr[i+1]);
        } else if (inner_arr[i]=="--double-prev"&&inner_arr[i-1]!=undefined&&inner_arr[i-2]!="--discard-next") {
            result.push(arr[i-1]);
        } else if (!cord_seq.includes(inner_arr[i])){
            result.push(inner_arr[i]);
        }
    }
    return result;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
};
