// write a function that accepts an array and returns string with given delimeter

function arrToString(arr, delimiter) {
    return arr.join(delimiter);
}

console.log(arrToString(["Hello", "World"], "-")); 
console.log(arrToString([1, 2, 3, 4], ",")); 


// write a function to find if given element exists in array or not 


function isExists(arr, elToFind) {
    return arr.includes(elToFind);
}

console.log(isExists([10, 20, 30, 40], 20)); 
console.log(isExists(["apple", "banana"], "grape")); 


//write a function to calculate product of all the elements in the array

function calProduct(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

console.log(calProduct([1, 2, 3, 4]));
console.log(calProduct([5, 10, 2])); 


// write a function that returns all the numbers in the given array 
// input array can have any type of values

function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");
}

console.log(filterNumbers([1, "a", 2, true, 3, null, 4])); 
console.log(filterNumbers(["hello", {}, 42, 99, "world"])); 


// write a function to sort the elements of the array in decreasing order
function sortDesc(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(sortDesc([10, 5, 20, 8])); 
console.log(sortDesc([3, 1, 4, 2])); 


