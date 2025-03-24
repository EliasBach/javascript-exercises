const fibonacci = function(n) {
    const N = parseInt(n)
    if (N < 0) {
        return "OOPS"
    
    } else {
        const fibonacci_array = [0, 1]
        for (i=0; i<N-1; i++) {
            fibonacci_array.push(fibonacci_array[i]+fibonacci_array[i+1])
        }
        return fibonacci_array[N]
    }
};

// Do not edit below this line
module.exports = fibonacci;
