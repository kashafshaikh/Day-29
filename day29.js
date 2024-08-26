// Day 29
// *Question 1: Calculate the Product of Non-Zero Digits*
// Description:
// Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
// Example:
// typescript
// Input: 4056
// Output: 120  // 4 * 5 * 6 = 120
// Input: 1002
// Output: 2  // 1 * 2 = 2
// Hint: Loop through each digit, skip zeros, and multiply the rest.
// ---
function productOfNonZeroes(num) {
    var product = 1;
    while (num > 0) {
        var digit = num % 10;
        if (digit != 0) {
            product *= digit;
        }
        num = Math.floor(num / 10);
    }
    return product;
}
console.log(productOfNonZeroes(4056)); // Output: 120
console.log(productOfNonZeroes(1002)); // Output: 2
// *Question 2: Find the Difference Between the Largest and Smallest Digit*
// Description:
// Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
// Example:
// typescript
// Input: 7593
// Output: 6  // 9 - 3 = 6
// Input: 12345
// Output: 4  // 5 - 1 = 4
// Hint: Convert the number to a string or use a loop to identify the largest and smallest digits, then calculate their difference.
function findDigitDifference(num) {
    var numStr = num.toString();
    var maxDigit = parseInt(numStr[0]);
    var minDigit = parseInt(numStr[0]);
    for (var i = 1; i < numStr.length; i++) {
        var digit = parseInt(numStr[i]);
        if (digit > maxDigit) {
            maxDigit = digit;
        }
        if (digit < minDigit) {
            minDigit = digit;
        }
    }
    return maxDigit - minDigit;
}
console.log(findDigitDifference(7593)); // Output: 6
console.log(findDigitDifference(12345)); // Output: 4
