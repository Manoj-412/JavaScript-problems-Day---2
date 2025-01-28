console.log("5. Function to Check if a Property Exists in an Object \n");

function propertyExists(obj, prop) {
    return obj.hasOwnProperty(prop);
}

const person = { name: "Bob", age: 30 };
console.log(propertyExists(person, "name"));
console.log(propertyExists(person, "address"));
