// Syntax of IIFE :

(function(){
 // Statement
})();

// Implemetaion of IIFE but we have seen this regular function sometime:

function FunName(){
  console.log("Hello World!");
}

FunName(); // Hello World!

// By Arrow function in regular:

const Fun = () =>{
    console.log("Hi Abhi!");
}

Fun();

// By IIFE implematation:

(function(){
   console.log("IIFE Program");
})() //>>>>>>>> Direct alling by IIFE function.


// Sum:
  
let a = 5;
let b = 5;
(function(){
  let z = a + b;
  console.log(z);
})()



// IIFE with parameter in arrow >>>>>>
let p = 10;
let q = 20;
((p, q)=>{
   var r = p + q;
   console.log(r);
})(50, 50);

// IIFE with Arrow function.

(() => {
  console.log("Hello Abhishek's");
})()



