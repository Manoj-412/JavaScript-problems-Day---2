console.log("2. Return String with Unique Values Using Objects \n");

function getUniqueCharacters(str) {
    const seen = {};
    let uniqueStr = "";
    for (let char of str) {
        if (!seen[char]) {
            uniqueStr += char;
            seen[char] = true;
        }
    }
    return uniqueStr;
}

console.log(getUniqueCharacters("hello world"));