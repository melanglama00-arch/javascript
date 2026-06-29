// Arrays
const trees = () => {
    let Tree = ["mango", "papaya", "apple", "grapes", "orange", "tomato", "gauva", "pineapple", "litchi", "peach"];

    console.log("\nBefore swapping: " + Tree);
    console.log(Tree.length);

    Tree[5] = "potato";
    console.log("\nThe array after swapping: " + Tree);

    Tree.push("banana");
    console.log("\nAfter push: " + Tree);

    Tree.pop();
    console.log("\nAfter pop: " + Tree);
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     console.log("\nBefore the shift: "+numbers);
     numbers.shift();
     console.log("\nAfter the shift: " + numbers);
     numbers.unshift(10);
     console.log("\nAfter unshift: " + numbers);

     let vowels =["a", "e", "i","o","u"];
     for(var i=0; i<=vowels.length; i++){
        console.log(vowels[i]);
     }

     let colors =["red", "green", "yellow", "pink", "blue","purple"];
     for(var j=0; j<=colors.length; j++){
        console.log(colors[j]);
     }
        


}
trees();

console.log(" ");


//example of multidimension array
const herbs = () => {
let array =[
    {
        name:"milanjuk",
        rollno:1,
        adress :"chabahil",
        age :3,

    },

    {
        name:"milan",
        rollno:5,
        adress :"mitrapark",
        age :4,

    },
    {
        Name:"sandesh",
        rollno:10,
        adress :"panch pokhari",
        age :8,

    }
];
console.log(array);


}
herbs();

