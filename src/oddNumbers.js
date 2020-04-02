let number1 = +process.argv[2];
let number2 = +process.argv[3];

let i =2;
let range = number2 -2;
do{
  number = number1 + i;
  console.log(number);
  i = i + 2;
}
while(i<range)
