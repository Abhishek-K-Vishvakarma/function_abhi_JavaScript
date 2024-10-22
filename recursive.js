// Recursive function...

function Recur(para){
    let n = para-1;
    if(n > para){
      return Recur(n);
    }
    console.log(para);
}
let num = 10;
Recur(num);

// Recursive with Factorial...

function Factorial(number){
         if(number == 0){
          return 1;
         }
         return number*(Factorial(number-1));
}
let fact = 5;
console.log(Factorial(fact));