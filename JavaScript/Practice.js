// // const names =["gagan","ishan","yogesh"];

// // // console.log(names.toUpperCase());

// // const arr3 = names.map(function(names){
// //    return names.toUpperCase();
// // })
// // console.log(arr3);

// // practise question
// // const product=[
// //     {id:1, name: "laptop"},
// //     {id:2, name: "Phone"},
// //     {id:1, name: "Tablet"},
// // ];

// // const q2ar=product.map(function(product)
// // {
// //     return product.name;
// // })
// // console.log(q2ar);
// // const q1=product.map(product=>product.name);
// //     console.log(q1);

// // practise question 3

// // const words=["apple","banana","cat","Elephant","dog"];
// // arr4 = words.filter(function(animal){
// //     return words.length>5;
// // })
// // // console.log(arr4);

// // let users = [
// //     { names: "A", age: 16 },
// //     { names: "B", age: 19 },
// //     { names: "C", age: 21 }
// // ];

// // let arr4 = users.filter((user) => {
// //     return user.age > 18;
// // });

// // console.log(arr4);
// // const words=["hello","world","javascript"];
// // const q4=words.reduce(function(total,word)
// // {
// //     return total+=words.length;
// // },0);
// // console.log(q4);


// // const q4demo =words.reduce((join,words)=>join+=words);
// // console.log(q4demo);

// // practise 4
// // const nums=[1,2,3,4,5,6,7,8,9];
// // let ans = nums.filter(function(num)
// // {
// //     return num%2==0;
// // }).map(function(nums){
// //    return nums*nums;
// // })
// // console.log(ans);

// // const q6arr=nums1.filter(num=>num%2==0).map(n=>n*n).reduce((total))






// let users = [
//     { names: "A", salary: 160000 },
//     { names: "B", salary: 19000 },
//     { names: "C", salary: 21000}
// ];

//  let ans = employe.reduce((total, e)=>{
//     return total +=e.salary;
// },0);
// console.log(ans); 

// const q7arr=employe.reduce((total,e)=> total+=e.salary,0);
// console.log(q7arr);





//  const students = [
//     { names: "A", marks: 35 },
//     { names: "B", marks: 45 },
//     { names: "C", marks: 23 },
//     { names: "D", marks: 23 }
// ];

// const passStudents = students
//     .filter(student => student.marks >= 33)
//     .map(student => student.names);

// console.log(passStudents);







// // question 9
// const marks=[80,90,70,60];
// const avg=marks
// .reduce((total,e)=>{
//     return total+=e;
// },0)/marks.length;
// console.log(avg);

// const qarr=marks.reduce((total,n)   =>total += n,0 )/marks.length;
// console.log(qarr);


const fruit=["apple","banana","apple","orange" ,"banana","apple"];


