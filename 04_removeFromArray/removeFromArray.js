const removeFromArray = function(array,...element) {
    let helperArray = [];
    for(let i=0; i<array.length;i++){
        if(array[i]!=element){
            helperArray[i] = array[i];
        }
    }
    array = helperArray;
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
