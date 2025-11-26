function reverseString(string) {
    let arr = string.split("")
    let reversedJoined = arr.reverse().join("")
    return reversedJoined
}

console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
