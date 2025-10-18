function removeFromArray(arr, itemsToRemove) {
    return arr.filter(item => !itemsToRemove.includes(item))
}


console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
