let num1 = parseInt(prompt("Please enter first number"));

let num2 = parseInt(prompt("Please enter second number"));

let operation = prompt("Please select what you want to do add substract multiply and divide");

if(operation === "add"){
  
  add((a,b) => a+b);
} else if(operation === "substract"){
  sub((a,b) => a-b);
} else if(operation === "multiply"){
  mult((a,b) => a*b);
} else if(operation === divide){
  divide((a,b) => a/b);
}
