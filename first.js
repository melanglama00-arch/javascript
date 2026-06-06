
//the meethod to print the messages in js
console.log("\nHello nepal");
console.log("\nHello Milan  Lama");
console.log("\nThis is my learing area");

//application of operators in js
//simple example of calculator
let a = 10;
let b = 5;
console.log("sum: ", a + b);
console.log("sub: ",a - b);
console.log("mul: ",a * b);
console.log("modulus: ", a % b);
console.log("division: ", a /b);
//unary operator
console.log(a++);//increment
console.log(b--);//decrement

//small practise of js using the conditional statement.
alert("welcome to the learning area");
let num = prompt("enter a number");
if( num % 5=== 0){
    console.log(num,"is the multiple of 5");
} else{
    console.log(num,"not the multiple of 5");
}

//using the loop concept 
//to print the number from 0 to 100
console.log("to print the number from 1 to 10");

for(let x=1; x<=10; x++){
    console.log("num: ",x);
}

console.log("to print the even numbers");
for(let y=2; y<=10; y++){
    if(y%2===0){
         console.log("y: ",y);
    }
   
}

console.log("to print the odd numbers ");
for(let z=0; z<=10; z++){
    if(z%2!==0){
         console.log("z: ",z);
    }
   
}
let sentence='thankyou my love for everything';
console.log(sentence);