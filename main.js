let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;



myFriends.pop()
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length =num
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];



let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop(friends.shift())
// Method 1
console.log(friends); // ["Eman", "Osama"] 



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse()
// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]




let website = "Go";

let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// Write Your Destructuring Assignment Here


console.log(words.pop()[0].slice("ze".length).toLocaleUpperCase()); // ZERO




let needle = "JS";
let haystack = ["PHP", "JS", "Python"];



if (haystack.includes(needle)!==0) {
    console.log ("Found");
    
}
    
if (haystack.indexOf(needle)!==0) {
    console.log ("Found");
}

if (haystack.lastIndexOf(needle)!==0) {
    console.log ("Found");
    }
    
// Write 3 Solutions



let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=arr1.concat(arr2).sort().join("").slice("ACDE".length).toLocaleLowerCase()

// allArrs = [arr2.pop(),arr1.pop(),arr2.pop()].sort().join("").toLowerCase();
// Your Code Here
console.log(allArrs); // fxy