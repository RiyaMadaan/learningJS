let number1 = process.argv[2];
let number2 = process.argv[3];
let number3 = process.argv[4];

if(number1 > number2 && number1 > number3) {
  console.log(number1,"is greatest");
}
if(number2 > number3 && number2 > number1) {
  console.log(number2,"is greatest");
}
if(number3 > number1 && number3 > number2) {
    console.log(number3,"is greatest");
}
if(number1 == number2 == number3){
  console.log("all are equal");
}
