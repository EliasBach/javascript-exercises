const repeatString = function(phrase, repetitions) {
    if (repetitions < 0) {
        return 'ERROR'
    } else {
        let string = ""
        for (i=0; i<repetitions; i++) {
            string+=phrase
        }
        return string
    }
};

// Do not edit below this line
module.exports = repeatString;
