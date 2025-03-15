const sumAll = function(num_a, num_b) {

    if (!Number.isInteger(num_a) || !Number.isInteger(num_b)) {
        return "ERROR"
    } else if (num_a < 0 || num_b < 0) {
        return "ERROR"
    } else {
        let larger_num = 0
        let smaller_num = 0
    
        if (num_a>=num_b) {
            larger_num = num_a
            smaller_num = num_b
        } else {
            larger_num = num_b
            smaller_num = num_a
        }

        let sum = 0
        for (int = smaller_num; int <= larger_num; int++) {
            sum += int
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
