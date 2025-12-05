//Exercise 1 Let vs Const
let age = 25;
const birthYear = 1999;

console.log("Initial Age:", age);
console.log("Birth Year:", birthYear);

//Update age
age = 26;
console.log("Updated Age:", age);

//birthYear = 2000; // This will cause an error because birthYear is a constant

//Exercise 2: Basic Conditional Statement
function isLoginValid(username, password) {
    if (username === "standard_user" && password === "secret_sauce") {
        return true;
    } else {
        return false;
    } 
}

console.log("Login Valid (correct creds):", isLoginValid("standard_user", "secret_sauce"));
console.log("Login Valid (wrong user):", isLoginValid("wrong", "secret_sauce"));
console.log("Login Valid (wrong password):", isLoginValid("standard_user", "bad_pass"));

//Exercise 3: Cart status check
function checkCartStatus(items) {
    if (items < 0) {
        return "invalid count";
    } else if (items === 0) {
        return "empty";
    } else {
        return "contains items";
    }
}        

console.log("Cart Status (0 items):", checkCartStatus(0));
console.log("Cart Status (2 items):", checkCartStatus(2));
console.log("Cart Status (-1 items):", checkCartStatus(-1));

//Exercise 4: Array filtering
const products = ["Backpack", "Bike Light", "Bolt T-Shirt", "Onesie" , "Water Bottle"];

function findProductStartingWithB(items) {
    return items.filter(product => product.startsWith("B"));
}

const filteredProducts = findProductStartingWithB(products);
console.log("Products starting with 'B':", filteredProducts);

//Exercise 5: Object & Permission Check
const user = {
    username: "standard_user",
    role: "qa",
    permissions: ["read", "write"]
};

function canWrite(user) {
    return user.permissions.includes("write");
}

console.log("User can write?", canWrite(user));

//Exercise 6: Rewrite a function as an arrow function

function formatUsername(name) {
    return "User: " + name;
}

// Arrow function version
const formatUsernameArrow = (name) => {
    return "User: " + name;
};

console.log(formatUsername("Shane"));
console.log(formatUsernameArrow("Shane")); 