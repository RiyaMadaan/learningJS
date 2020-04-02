let number1 = +process.argv[2];
let number2 = +process.argv[3];

let i = 2;
let count = 0;
let range = number2 -4;
do{
  number = number1 + i;
  count = count + number;
  i = i + 2;
}
while(i<=range){
  console.log(count);
}
