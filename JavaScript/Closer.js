// using Arrayliteral
let array = ["apple", "banana", "orange", "grape", "mango"];
// using Array constructor
let fruits = new Array("apple", "banana", "orange", "grape", "mango", "lichi");
console.log(array.length);
// push 
// array ke ander element add karta hai
array.push("watermelon");
console.log(array);

//pop  
// element remove kar dega
array.pop("watermelon");
console.log(array);

//unshift
//element ko starting mai dal dega
array.unshift("watermelon");
console.log(array);

//shift
//staring index remove kar dega 
array.shift("watermelon");
console.log(array);

//includes
// check kart hai ki element  present hai ya nahi 
console.log(array.includes("mango"))
console.log(array.includes("watermelon"))


    // indexof
    //use element ka index return kar dega
console.log(array.indexOf("mango"))

    //join
    //sare element join kar degi jisse bi join karvna hai 
console.log(array.join("-"))

    //slice
    //elements bataiga os ange ke 
console.log(array.slice(1, 3));

// splice
// elements bataiga uss range ki right bound tak 
console.log(array.splice(1, 4));

//normal loop
array = ["apple", "banana", "orange", "grape", "mango"];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for of loop
for (let fruit of array) {
    console.log(fruit);
}

// for each
array.forEach(function (fruit) {
    console.log(fruit);
}