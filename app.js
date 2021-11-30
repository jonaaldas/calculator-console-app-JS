let num1 = parseInt(prompt("Please enter first number"));

let num2 = parseInt(prompt("Please enter second number"));

let operation = prompt("Please select what you want to do add substract multiply and divide");

if(operation === "add"){
  function add(a,b){
    console.log( a + b);
  }
  add(num1,num2)
} else if(operation === "substract"){
  function sub(a,b){
    console.log( a - b);
  }
  sub(num1,num2)
} else if(operation === "multiply"){
  function mult(a,b){
    console.log( a * b);
  }
  mult(num1,num2)
} else if(operation === "divide"){
  function div(a,b){
    console.log( a / b);
  }
  div(num1,num2)
}
