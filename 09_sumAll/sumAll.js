const sumAll = function(n1, n2) {
    let i = n1
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) return "ERROR";
    if (n1 < 0 || n2 < 0) return "ERROR";
    while (i <= n2) {
        i += 1
    }
    let sum = n1 + i + n2
    return sum
};
console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
