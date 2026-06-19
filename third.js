//function in js
function sayhello(){ //functiion decleration
    console.log("hello Nepal");
}

//function calling
sayhello();

console.log(" ");

//second function
function display(){
    console.log("Username: Milanjuk Lama");
    console.log("Age: 12");
    console.log("City: Kathmandu");

}

//calling the function
display();

console.log(" ");//spacing in code
    //function to display the function
    function product(){
        let x= parseInt(prompt("enter multiplicative number"));
        for(var i=1; i<=10; i++){
            console.log(x + "*" + i + "=" + x*i );
        }
    }

    //function calling
    product();

    console.log(" ")//spacing in code

    function pattern(){
        for(var j=0;  j<=5; j++){
            let p="";
            for(var k=1; k<=j; k++){
                p=p+ "*"
         
            }
            console.log(p);
         
        }
       
    }

    //function calling
    pattern();

    console.log(" ");

console.log("HOMEWORK");
// question 1:
    function introduce(){
        console.log("My name is Milajuk Lama");
    }
introduce();

console.log(" ");

//queation 2:
function sum(){
   let x=parseInt(prompt("Enter first number"));
    let y=parseInt(prompt("Enter second number"));
    console.log(add=x+y);

}
sum();

console.log(" ");

//question 3:
function square(){
    let z=parseInt(prompt("Enter first number"));
     console.log(sq=z**2);
}

square();

console.log("");

//question 4:
function greeting(){
    console.log("Student:Good Morning sir");
}
greeting();

console.log(" ");

//question 5:
function arrow(){
    let a=parseInt(prompt("Enter 1st number for multiplication"));
    let b=parseInt(prompt("Enter 2nd number for multiplication"));
    console.log(c = a*b);
}
arrow();

console.log(" ");

//question 6:
function check(){
    let r=parseInt(prompt("enter the numder to check even or odd"));
    if(r%2==0){
        console.log("the number is even");
    } else{
        console.log("the number is odd");
    }
}
check();

console.log(" ");
//question 7:
console.log("function that divide two numders");
function expression(){
    s=100;
    t=20;
    div=s/t;
    console.log(div);
}
expression();

console.log(" ");
//question 8:
console.log("addtion of many numbers by function(parameterized)");
function many(u, v, w, g){
console.log(o=u+v+w+g);
}
many(10, 20, 30, 40);

console.log(" ");
//question 9:
function result(){
    let marks=parseInt(prompt("enter your marks"));
    if(marks>=40){
        console.log("student is passed");
    } else{
        console.log("student is fail ");
    }
}
result();



