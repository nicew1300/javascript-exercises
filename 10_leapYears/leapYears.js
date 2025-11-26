const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert(`${year} is a leap year!`)
    }
    else alert("That's not a leap year!")
};

leapYears(1984)

// Do not edit below this line
module.exports = leapYears;
