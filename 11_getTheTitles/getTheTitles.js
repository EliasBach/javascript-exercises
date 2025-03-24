const getTheTitles = function(title_author_array) {
    let title_array = []
    title_author_array.forEach(element => 
        {title_array.push(element.title)})
    return title_array
    }
    

// Do not edit below this line
module.exports = getTheTitles;
