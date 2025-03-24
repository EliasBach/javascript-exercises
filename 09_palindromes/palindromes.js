const palindromes = function (text) {
    //turn text to array of characters for easier processing
    let text_array = text.split("")
    //remove spaces, punctuation and capitalisation from array
    text_array = text_array.filter(char => /^[a-zA-Z0-9]$/.test(char))
    text_array = text_array.map(char => char.toLowerCase())

    //split text in half, and reverse second half
    //different cases for even length strings and odd length strings
    const l = text_array.length

    text_array_1st_half = text_array.slice(0,l/2)

    if (text_array.length%2 == 0) {
        text_array_2nd_half = text_array.slice(l/2,l).reverse()
    } else {
        text_array_2nd_half = text_array.slice((l/2)+1,l).reverse()
    }
    
    
    //compare halves (comparison operator does not work on arrays, because they are objects)
    return text_array_1st_half.toString() == text_array_2nd_half.toString()
};

// Do not edit below this line
module.exports = palindromes;
