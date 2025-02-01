function checkSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

console.log(checkSubstring("hello world", "world")); 
console.log(checkSubstring("hello", "bye")); 
