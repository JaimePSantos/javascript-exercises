const sumAll = function(lowerBound, upperBound) {
    let sum =  BigInt(0);
    if(typeof(upperBound)==="number" && typeof(lowerBound)==="number" && lowerBound>0 && upperBound>0){
        if(lowerBound>upperBound){
            lowerBound = lowerBound + upperBound;
            upperBound = lowerBound - upperBound;
            lowerBound = lowerBound - upperBound
        }
        for(let i = lowerBound; i<=upperBound;i++){
                sum+=BigInt(i);
            }
    }else{
        return "ERROR";
    }
    return Number(sum);
};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(1,4000))
