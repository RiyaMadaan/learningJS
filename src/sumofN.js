let number = +process.argv[2];

let sum = 0;
let i = 1;
do{
  sum = sum + i;
  i = i+1;
}
while(i<=number){
  console.log(sum);
  return sum;
}
