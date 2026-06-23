// // function downloadFile(url ,callback){
// //     console.log("Starting download...");

// //     setTimeout(() =>{
// //         console.log("Download COmpleted");
// //         callback();
// //     },2000);
// // }
// // downloadFile("file.pdf",() =>{
// // console.log("Opening file...");

// // })


// // function login(callback){
// //     setTimeout(() =>{
// //     console.log("User authenticated");
// //     callback();
// //     },1000);
// //     }

// //     function getProfile(callback){
// //     setTimeout(() =>{
// //     console.log("Profile fetched");
// //     callback();
// //     },1000);
// //     }

// //     login(() =>{
// //         getProfile(() =>{
// //             console.log("Displaying profile");
// //         })
// //     })


// function placeOrder(callback) {
//      setTimeout(() => {
//          console.log("Order placed");
//           callback();
//          }, 1000); } 
         
// function prepareFood(callback) {
//      setTimeout(() => { 
//         console.log("Food prepared"); 
//         callback(); 
//     }, 2000); } 
    
//     function deliverFood(callback) { 
//     setTimeout(() => { 
//     console.log("Food delivered"); 
//     callback(); 
// }, 1000); } 

// placeOrder(() => { 
// prepareFood(() => { 
// deliverFood(() => {
// console.log("Enjoy your meal!"); }); }); });


// function download(cb) {  
//  setTimeout(() => {     
//  console.log("Download Complete");     
//   cb();  
//   }, 1000); } 
  
//   function compress(cb) {  
//  setTimeout(() => {       
// console.log("Compression Complete");    
//  cb();   
//  }, 1000); } 
 
//  function upload(cb) {    
// setTimeout(() => {     
// console.log("Upload Complete");        
// cb();  
//  }, 1000); } 
//  console.log("Start Download"); 
//  download(() => {   
//  console.log("Compressing File");    
//  compress(() => {       
//     `console.log("Uploading File");      
// upload(() => {          
// console.log("Process Finished");     
//  });    }); });


//  function downloadFile() { 
// return new Promise((resolve) => { 
// console.log("Starting download..."); 
// setTimeout(() => { 
// resolve("Download completed"); 
// }, 2000); }); } 

// downloadFile() .then(result => { 
//  console.log(result); 
// });   


// function download() {    
// return new Promise(resolve => {  
// setTimeout(() => {     
// console.log("Downloaded");            
// resolve();        
// }, 1000);    }); } 
// function compress() {   
//  return new Promise(resolve => {        
// setTimeout(() => {            
// console.log("Compressed");           
// resolve();        
// }, 1000);    }); } 
// function upload() {    
// return new Promise(resolve => {        
//  setTimeout(() => {            
//   console.log("Uploaded");           
//    resolve();       
//  }, 1000);    }); } 
//  download()    
//  .then(() => compress())    
//  .then(() => upload())    
//  .then(() => console.log("All Tasks Completed"));