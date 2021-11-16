const reverseString = function(str) {
    let newStr = "";
    let i = str.length-1;
    for(let j = 0; j<str.length; j++,i--){
        newStr += str.charAt(i);
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
console.log("Hello")