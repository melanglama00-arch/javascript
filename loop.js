//this is the oractising mode for loop

for(let i=1; i<=5; i++){
    let p="";
    for(let j=1; j<=i; j++){
        p+="*";
    }
    console.log(p)
}

console.log("")
console.log("")

for(let i=5; i>=1; i--){
    let p1 ="";
    for(let j=1; j<=i; j++){
        p1 +="*";
    }
    console.log(p1)
}

console.log("")
console.log("")

for(let i=1; i<=5; i++){
    let p2 ="";
    for(let j=1; j<=5; j++){
        p2 +="*";
    }
    console.log(p2)
}

let x= parseInt(prompt("enter multiplicative number"));
console.log("the multiplication table of 7")
for(let k=1; k<=10; k++){
    console.log(x + "*" + k + "=" + k*x);

}
