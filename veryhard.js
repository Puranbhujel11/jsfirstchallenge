//very hard Challenge
let x = prompt("Enter First Number" );
let operator = prompt("Choose an operator");
let y = prompt("Enter Second Number");

if (operator === "+")
{
  console.log(`${x} + ${y} = ${add (parseInt (x ) , parseInt (y))}`)
}
else if (operator === '-')
{
   console.log(`${x} - ${y} = ${subtract (parseInt (x ) , parseInt (y))}`)
}
else if (operator === '*')
{
   console.log(`${x} * ${y} = ${multiply (parseInt (x ) , parseInt (y))}`)
}
else if (operator === '/')
{
   console.log(`${x} / ${y} = ${divide (parseInt (x ) , parseInt (y))}`)

}

 else 
{
  alert('Please try again.');
}

//Hard challenge functions// 
function add (num1 , num2){
   return num1 + num2;
}
// console.log()
// add();
// add();

function subtract (num1 , num2){
   return num1 - num2;
}
// subtract();

function multiply (num1 , num2){
   return num1 * num2;
}
// multiply();

//divide//
function divide (num1 , num2){
   return num1 / num2;
}