console.log("4. Function to Combine Properties from Multiple Objects\n ");

function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = mergeObjects(obj1, obj2);
console.log(combined); 