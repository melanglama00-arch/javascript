console.log("welcome to the second file");
//practising the array
let marks=[55,78,34,35,32,24];
console.log(marks);

//the looping over the arrays
let names=["milan", "melang", "milanjuk", "wangel", "ram", "sita", "balram"];
for(let idx=0; idx < names.length; idx++) {
    console.log(names[idx]);
}
let arr=[34,56,78,43,33,24,44];
let sum=0;
for (let val of arr) {
    sum+=val;
}

 let ave=sum/arr.length;
    console.log(`the average of the given array numbers = ${ave}`);
    console.log("this i show the learning happens");