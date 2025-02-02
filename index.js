// let a = 2;
// a = 'abs';
// console.log(a);
// const b = 3;

//primitive types
/*
1. number
2. string
3. boolean
4. undefined
5. null
*/

//1. number
let a = 100;
a /= 3;
console.log("non-normalized result of division 100 on 3", a); 
a = Math.trunc(a);
console.log("normalized", a);

// a = Math.round(a);
// a = 45,88
// a = Math.floor(a);
a = 45.88;
a = Math.ceil(a);
console.log("round to integer", a);


