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

}

trees();

