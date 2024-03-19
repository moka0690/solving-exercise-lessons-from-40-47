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