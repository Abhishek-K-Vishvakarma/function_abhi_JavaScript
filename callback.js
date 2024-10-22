function Multi(x, y, revrcall){
  console.log(x * y);
   revrcall();
}
function plication(){
   console.log("CallBack in Regular Function!");
}
Multi(20, 10, plication);


// This Function interpret with Async...

function Add(a, b, hi){
  console.log(a + b);
  let back = setTimeout(()=>{
    hi();
  }, 1000);
}
function hello(){
  console.log("CallBack in Async!");
}

let call = setTimeout(()=>{
  Add(50, 50  , hello);
}, 2000);

