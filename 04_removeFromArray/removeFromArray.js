const removeFromArray = function(array, ...items_to_remove) {
    const new_array = []
    array.forEach((item) => {
        if (!items_to_remove.includes(item)) {
          new_array.push(item);
        }
      })
    return new_array
};

// Do not edit below this line
module.exports = removeFromArray;
