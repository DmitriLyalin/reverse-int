module.exports = function reverse (n) {
    const stringNumber = Math.abs(n).toString();
    let reverseString = "";
    for (let i = stringNumber.length-1; i >= 0; i--) {
      reverseString = `${reverseString}${stringNumber[i]}`;
    }
    return Number(reverseString);
}
