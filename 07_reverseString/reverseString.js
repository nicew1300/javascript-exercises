function reverseString(string) {
    let arr = string.split("")
    let reversed = arr.reverse().join("")
    return reversed
}

console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
