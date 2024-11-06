//type convertion is used to convert datatype into another data type
let convertion1=true
let result=Boolean(convertion1)//convert into string from number

// console.log(Number(convertion1));//print convertion into which data type
console.log(typeof result);//type of convertion
console.log( result);//value of variable 
//more example
//1.333->string=string
//2."33"->number=number
// console.log(2**10);//power
// console.log(2*8)//multiplication
// console.log(2+2)//addition
// console.log(2/2)//divition
// console.log(2%2)//molduler//3.true=1 & false=0
//4."333abc"->number=number ->value=Nan
//underfined=undefined
// *******************operation**************

// arithmatic operation 


// addition of two String
let str1="amrinder"
let str2=" singh"

str3=str1+str2
// console.log(str3)
//*****************precedence**************************** 
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
//precedence = high to low & associativity = left to right
// 1.()
//   **
// 2.*,/,%
// 3.++,--
// 4.+,-
// 5.=,+=,-=
// ****************prefix and postfix incremnet************
let prefix=10;
console.log(prefix)
++prefix;
console.log(prefix)
prefix++;
console.log(prefix)