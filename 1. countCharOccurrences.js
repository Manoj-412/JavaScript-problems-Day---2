console.log("1. Count Occurrence of a Character in a String Using an Object\n ");

function countCharOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countCharOccurrences("hello world"));