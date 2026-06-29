//homework 1
function showSubjects() {

    let subjects = ["Math", "Science", "English", "Computer", "Social"];

    console.log("Subjects:");

    for(let i = 0; i < subjects.length; i++){
        console.log(subjects[i]);
    }
}
showSubjects();

console.log(" ");
//homework 2
function manageCountries(){

    let countries = ["Nepal", "India", "China"];

    console.log("Original Array:");
    console.log(countries);

    countries.push("Japan");
    console.log("After Push:");
    console.log(countries);

    countries.pop();
    console.log("After Pop:");
    console.log(countries);

    countries.shift();
    console.log("After Shift:");
    console.log(countries);

    countries.unshift("Bhutan");
    console.log("After Unshift:");
    console.log(countries);

}
manageCountries();

console.log(" ");
//homework 3
function printFriends(){

    let friends = ["milan", "Sundesh", "aanand", "kabi", "aryan"];

    console.log("Friends:");

    for(let i = 0; i < friends.length; i++){
        console.log(friends[i]);
    }

}
printFriends();

console.log(" ");
//homework 4
function totalMarks(){

    let marks = [75, 80, 90, 85, 70];

    let total = 0;

    for(let i = 0; i < marks.length; i++){
        total = total + marks[i];
    }

    console.log("Marks:", marks);
    console.log("Total Marks:", total);

}
totalMarks();

console.log(" ");
//homework 5
function familyDetails(){

    let family = [

        {
            name:"karma lama",
            age:50,
            address:"Kathmandu",
            phone:"9800000001",
        },

        {
            name:"doma lama",
            age:45,
            address:"Kathmandu",
            phone:"9800000002",
        },

        {
            name:"ringi lama",
            age:20,
            address:"Kathmandu",
            phone:"9800000003",
        },

        {
            name:"milanjuk lama",
            age:19,
            address:"Kathmandu",
            phone:"9800000005",
        }

    ];

    for(let i=0; i<family.length; i++){

        console.log("Name:",family[i].name);
        console.log("Age:",family[i].age);
        console.log("Address:",family[i].address);
        console.log("Phone:",family[i].phone);

    }

}
familyDetails();

console.log(" ");
//homework 6
function studentDetails(){

    let students = [

        {
            Id:101,
            name:"milanjuk",
            age:20,
            phone:"980000001",
        },

        {
            Id:102,
            name:"pujan",
            age:21,
            phone:"980000002",
        },

        {
            Id:103,
            name:"yatiraj",
            age:19,
            phone:"980000003",
        },

        {
            Id:104,
            name:"ayush",
            age:20,
            phone:"980000004",  
        },

        {
            Id:105,
            name:"srijan",
            age:22,
            phone:"980000005",
        }

    ];

    for(let i=0; i<students.length; i++){

        console.log("ID:",students[i].Id);
        console.log("Name:",students[i].name);
        console.log("Age:",students[i].age);
        console.log("Phone:",students[i].phone);
    }

}
studentDetails();