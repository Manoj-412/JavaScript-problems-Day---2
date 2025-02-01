function maxRepeatingSequence(str) {
    let maxChar = str[0], maxCount = 1, count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            count = 1; 
        }

        if (count > maxCount) {
            maxCount = count;
            maxChar = str[i];
        }
    }

    return `${maxChar} repeats ${maxCount} times`;
}

console.log(maxRepeatingSequence("aaabbc")); 
console.log(maxRepeatingSequence("bbbbbbaaaaccc")); 
