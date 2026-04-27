// ORIGINAL DIRECTIONS FROM LAUCHCODE
// The code in your repo should:
// Include commented pseudocode to break down the logic for what you are trying to accomplish in each example.
// Use console logs to test your outputs and ensure your code works as expected.
// Follow all of the syntax rules and conventions you have learned about in Unit 0.
// Include comments to identify where the skill from each module is represented in the code.
// You’ll have comments to explain 6 total skills. One from each of the following modules:
// Values, Data Types, and Operations
// Stringing Characters Together
// Control Structures and Logic
// Building Arrays
// Using Arrays
// Working With Loops
// Keep in mind that you may use multiple skills on one line of code–just make sure you explain each skill in the comment.

// ***************************************************************************************************************************

// Skills Reference:
// 1 = Values, Data Types, and Operations
// 2 = Stringing Characters Together
// 3 = Control Structures and Logic
// 4 = Building Arrays
// 5 = Using Arrays
// 6 = Working With Loops

// ***************************************************************************************************************************

// Pseudocode
// Display Collection of Pothos

// VARIABLE storing pothos user owns and wants

// FUNCTION to DISPLAY list on page
// FOR EACH pothos in list
//     CHECK if in collection or need
//          DISPLAY if in collection or need
//          DISPLAY plant name
//          DISPLAY plant picture

// BUTTON to TOGGLE if has plant or needs plant
//      IF HAS TOGGLE incollection to false
//      ELSE if need TOGGLE incollection to true

// BUTTON to ADD plant to collection
//     ASK user for plant name and save value to newName variable
//     ASK user for plant picture and save value to newPicture variable
//     ASK user if they have the plant or need it and save value to addToCollection variable
//          ADD new plant to collection

// ***************************************************************************************************************************

// Real Code

// 4: Building Arrays
// Variable holding pothos collection info
let pothosCollection = [
    {
        name: "Neon Pothos",
        picture: "neon-pothos.jpg",
        inCollection: true,
    },
    {
        name: "Marble Queen Pothos",
        picture: "marble-queen-pothos.jpg",
        inCollection: true
    },
    {
        name: "Golden Pothos",
        picture: "golden-pothos.jpg",
        inCollection: true
    },
    {
        name: "Baltic Blue Pothos",
        picture: "baltic-blue-pothos.jpg",
        inCollection: false,
    },
    {
        name: "Albo Pothos",
        picture: "albo-pothos.jpg",
        inCollection: false,
    },
    {
        name: "Skeleton Key Pothos",
        picture: "skeleton-key-pothos.jpg",
        inCollection: false,
    }
];

// 3 + 6: Loop through plants and check status
// For loop to display on page which pothos are in your collection vs what ones you need
function displayCollection(collection) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].inCollection === true) {
            // 2: Combine strings with variables using interpolation
            console.log(`Index: ${i}
                Name: ${collection[i].name}
                Status: In Collection
                Display: ${collection[i].picture}`);
        } else {
            console.log(`Index: ${i}
                Name: ${collection[i].name}
                Status: Need
                Display: ${collection[i].picture}`);
            }
    }
}

// Mark where original collection starts in console
console.log("------------------------------- ORIGINAL COLLECTION ------------------------------");

// Displays original collection
displayCollection(pothosCollection);

// 1: Variable storing selected plant index
// Connects to toggle button on display to change the plant from the owned or need list
let clickedOn = 0; // Example of one of the pothos being clicked on to change if its in the collection or not

// 3: Toggle logic
if (pothosCollection[clickedOn].inCollection === true) {
    pothosCollection[clickedOn].inCollection = false;
} else {
    pothosCollection[clickedOn].inCollection = true;
}

// Mark where readline asks user question starts in console
console.log("------------------------------- READLINE QUESTIONS -------------------------------");

// Connects to a button on the page that lets the user input a new plant needed/wanted for collection
const input = require('readline-sync');
let newName = input.question("Enter Name of Plant: ");
let newPicture = input.question("Upload Picture: ");
// 1: Store user input and boolean conversion
let addedToCollection = input.question(`Is this a plant you already have in the collection? "yes" or "no"? `);

// 5: Add new plant to array
// Adds new plant to collection
pothosCollection.push({
    name: newName,
    picture: newPicture,
    inCollection: addedToCollection.toLowerCase() === "yes"
});

// Mark where updated collection starts in console
console.log("------------------------------- UPDATED COLLECTION -------------------------------");

// Displays collection after changing the status of one plant and adding a new one to the list
displayCollection(pothosCollection);
