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
    console.log("you enter invalid operator.");
}

// for loop in js
for(var i=0; i<10; i++){
    console.log(i);
}
//to print the even numbers upto 20
console.log("  ")
console.log("  ")

let num=2
for(num; num<=20; num++){
    if(num%2==0){
        console.log(num)
    }

}

console.log("  ")
var num5=5
for(let i=1; i<10; i++){
    console.log(i * num5 )
}

//nested loop in js
for(let i=1; i<5; i++){
    let pattern=" "
    for(var j=i; J<=i; j++){
        console.log("*")

    }
    console.log(pattern)

}
