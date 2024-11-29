// example -2

//3. Currying
// Closures help in creating partially applied functions (currying).

// function myfunc1(power) {
//   return function (number) {
//     //   console.log(number ** power)
//     return number ** power;
//   };
// }

// const square = myfunc1(2);
// const res = square(5);
// console.log(res);

// const cube = myfunc1(3);
// const res2 = cube(3);
// console.log(res2);



const myfunc1= (power)=>(number)=> number ** power;

  
  const square = myfunc1(2);
  const res = square(5);
  console.log(res);
  
  const cube = myfunc1(3);
  const res2 = cube(3);
  console.log(res2);
