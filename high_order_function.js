// map(), filter(), reduce() >>>>>>>>>

// map():
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test = array.map((e)=> e > 6); 
console.log(array.length);
console.log(typeof test);
console.log(typeof array);
console.log(test);

// filter():
let arr = [7,4,6,1,5,3,8,19,89,9,53,60];
let result = arr.filter((data)=>{
 return data % 2 == 0;
})
console.log(result);

let obj = [
  {name : 'Abhishek', age : 23, salary: 5},
  { name: 'Peter', age: 22, salary: 25000 },
  { name: 'John', age: 21, salary: 30000 }
];

let res = obj.map((e)=> e);
console.log(res);

let all_arr= obj.map((e)=>{
 return e.name;
})
console.log("Name : " + all_arr);

let all_arr1 = obj.map((e) => {
  return e.age;
})
console.log("Age : " + all_arr1);

let all_arr2 = obj.map((e) => {
  return e.salary;
})
console.log("Salary : " + all_arr2);

// reduce():

let reduceArray = [7, 4, 6, 1, 5, 3, 8, 19, 89, 9, 53, 60];
let final_result =  reduceArray.reduce((first, max)=>{
   if(first > max) 
     max = first  //  min=1> max=2 = 2 = 1; return 2, output = 2...
     return max;
})
console.log(final_result);

let res_all_array = reduceArray.reduce((add, sum)=>{
  return add + sum;
}, 0);

console.log("Sum of all arrays element : "+ res_all_array);


