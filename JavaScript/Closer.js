// using Arrayliteral
let array = ["apple", "banana", "orange", "grape", "mango"];
// using Array constructor
let fruits = new Array("apple", "banana", "orange", "grape", "mango", "lichi");
console.log(array.length);
// array ke ander element add karta hai
array.push("watermelon");
console.log(array);

  
// element remove kar dega
array.pop("watermelon");
console.log(array);

//element ko starting mai dal dega
array.unshift("watermelon");
console.log(array);

//staring index remove kar dega 
array.shift("watermelon");
console.log(array);

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

// elements bataiga uss range ki right bound tak 
console.log(array.splice(1, 4));

array = ["apple", "banana", "orange", "grape", "mango"];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for of loop
for (let fruit of array) {
    console.log(fruit);
}

// for each
array.forEach(function() {
    console.log(fruits);
})

//ADVANCE ARRAY METHOD
//Map
//sare elements per condidtion apply kar dega
array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const double = array.map(function(x) {
    return x * 2;
})
const doubledemo = array.map(x => x * 2)
console.log(double);
console.log(doubledemo);
console.log(array);

//FILTER
//tumhari condition check karega jon bi element condition pass hoga vo new array mai aa jaiga
const even = array.filter(function(x) {
    return x % 2 == 0
});
const evendemo = array.filter(x => x % 2 == 0);
console.log(even);
console.log(evendemo);

const odd = array.filter(x => x % 2 != 0);

console.log(odd);

// REDUCE
// sare elemnts ko ek variable mai convert kar dega
const sum = array.reduce(function(sum, x) {
    return sum + x;
}, 0);
const sum1 = array.reduce(function(sum, x) {
    return sum + x;
});
const sum2 = array.reduce((sum, x) => sum + x, 0);
const sum3 = array.reduce((sum, x) => sum + x, 0);
console.log(sum);
console.log((sum1));
console.log((sum2));
console.log((sum3));


//Find
//condition pass karne wala element return kar dega
const f= array.find(x => x === 3);
console.log(f);

//Some
//check karta hai ki koi element condition pass karta hai ya nahi
const s = array.some(x => x > 5);
console.log(s);

//Every
//check karta hai ki sare element condition pass karte hai ya nahi
const e = array.every(x => x > 0);
console.log(e);


