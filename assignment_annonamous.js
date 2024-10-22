// Assignment_Annonamous Function:

let a = 50;

function funName(){
  console.log("Hello coder!");
  console.log(typeof a);
  
}

funName();
console.log(typeof funName);
console.log(a);
let oth = funName;
console.log(oth);
console.log(typeof oth);

// With parameter in Assignment Function:


function Add(a, b){
  let z = a + b;
  console.log(z);
  return z;
}
setTimeout(()=>{ // with async calling.
  Add(10, 40);
}, 1000);


function Sub(p, q){
  let r = p - q;
  console.log(r);
}

let  x = 150, y = 50;
setTimeout(()=>{
  Sub(x, y);
}, 2000);


function Multi(m, t){
   let o = m * t
  return o;
}

setTimeout(()=>{
  console.log(Multi(15, 10));
}, 3000)

function Divide(s, t){
    let div = s / t;
    return div; 
}  

let solve = Divide(2000, 10);
setTimeout(()=>{
  console.log(solve);
}, 4000);

