const palindromes =(str)=>{
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    for(let i = 0; i<str.length-1; i++){
        if(str[i] !== str[str.length-i-1]){
            console.log(`1 : ${str[i]}\t2 : ${str[str.length - i -1]}`)
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
