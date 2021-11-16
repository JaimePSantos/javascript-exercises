const removeFromArray = function (arr, ...elements) {
    for(el of elements){
        let index = arr.indexOf(el)
        if(index>-1){
            arr.splice(index,1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
