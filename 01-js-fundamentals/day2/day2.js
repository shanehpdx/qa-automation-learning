// Day 2 — Exercise 1: Looping over "test data"

// Imagine this is a list of test cases you want to run against a login form.
const loginTestCases = [
  { username: "standard_user", password: "secret_sauce", expectedResult: "success" },
  { username: "locked_out_user", password: "secret_sauce", expectedResult: "locked" },
  { username: "standard_user", password: "wrong_password", expectedResult: "failure" },
];
const cartItems = [
  { name: "Backpack", price: 29.99, quantity: 1 },
  { name: "Bike Light", price: 9.99, quantity: 2 },
  { name: "Bolt T-Shirt", price: 15.0, quantity: 1 },
];


// TODO #1:
//  - Write a function called runLoginSuite that:
//  - takes the array of test cases
//  - loops through them using for...of
//  - logs each case in a friendly way, for example:
//    "Test case 1: standard_user / secret_sauce -> expected: success"

// Starter skeleton:
function simulateLogin(username, password) {
  if (username === "standard_user" && password === "secret_sauce") {
    return "success";
  }

  if (username === "locked_out_user" && password === "secret_sauce") {
    return "locked";
  }

  return "failure"; // everything else fails
}

function calculateCartTotal(items) {
  let total = 0;
    for (const item of items) {
    total = total + item.price * item.quantity;
    }

    return total;
}
  


function runLoginSuite(testCases) {
  let index = 1;
  for (const testCase of testCases) {
    const actualResult = simulateLogin(testCase.username, testCase.password);
    const passed = actualResult === testCase.expectedResult;

    console.log(
  `Test case ${index}: ${testCase.username} / ${testCase.password} -> ` +
  `expected: ${testCase.expectedResult}, actual: ${actualResult} => ${passed ? "PASS" : "FAIL"}`
);
index++;

  }
}

// TODO #2:
// Call runLoginSuite with loginTestCases so it actually runs.

console.log("=== Running Day 2 - Exercise 1 ===");
// Your call here, e.g.
runLoginSuite(loginTestCases);

console.log("\n=== Calculating Cart Total ===");

const expectedCartTotal = 29.99 + 9.99 * 2 + 15.0 * 1;
const actualCartTotal = calculateCartTotal(cartItems);


//Round to 2 decimal places so we don't have floating point issues
const roundedActual = Math.round(actualCartTotal * 100) / 100;     
const roundedExpected = Math.round(expectedCartTotal * 100) / 100;

const cartPassed = roundedActual === roundedExpected;

console.log(
    `Cart total -> expected: ${roundedExpected}, actual: ${roundedActual} => ${cartPassed ? "PASS" : "FAIL"}`);
