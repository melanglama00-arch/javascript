//the simple calculator using the if else if
let num1 = parseInt(prompt("Enter first  number:"));
let num2 = parseInt(prompt("Enter second  number:"));

let operator = prompt("Enter a operator:")

if (operator == "+") {
    console.log("Result: " + (num1 + num2));
}
else if (operator == "-") {
    console.log("Result: " + (num1 - num2));
}
else if (operator == "*") {
    console.log("Result: " + (num1 * num2));
}
else if (operator == "/") {
    if (num2 != 0) {
        console.log("Result: " + (num1 / num2));
    } else {
        console.log("Division by zero is not possible.");
    }
}
else {
    console.log("you enter in valid operator.");
}
