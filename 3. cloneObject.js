console.log("3. Create a Function That Clones an Object\n ");

function cloneObject(obj) {
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = obj[key];
        }
    }
    return clonedObj;
}

const original = { name: "Alice", age: 25 };
const cloned = cloneObject(original);
console.log("original : ",original);
console.log("cloned : ",cloned); 
console.log("IS EQUAL: ",original === cloned); 