const fibonacci = (n)=> {
    n=Number(n)
    return (n<0 ? "OOPS" : 
    (n<=1 ? n : 
        fibonacci(n-2) + fibonacci(n-1)))
};

// Do not edit below this line
module.exports = fibonacci;
console.log(fibonacci(5))
