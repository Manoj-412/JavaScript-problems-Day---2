function safeAdd(a, b) {
    let sum = Number(a) + Number(b);
    return isNaN(sum) ? 0 : sum;
}

console.log(safeAdd(5, 10));
console.log(safeAdd("hello", 10));
