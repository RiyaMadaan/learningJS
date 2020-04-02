let number1 = +process.argv[2];
let number2 = +process.argv[3];

let count = 0;
let i = 2;
do{
  number = number1 + i;
  count = count + number;
  i = i+2;
}
while(i<=6){
  console.log(count);
  return count;
}
