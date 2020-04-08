let number1 = +process.argv[2];
let number2 = +process.argv[3];
 if(number1%2==0){
let count = 0;
if(number1 < number2){
for(count = number1 +2; count < number2 ; count = count+2){
  console.log(count);
}
}
}
