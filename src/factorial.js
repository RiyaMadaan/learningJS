let number = +process.argv[2];

let fact = 1;
do{
  fact = fact * number;
  number = number-1;
}
while(number >= 1){
  console.log("factorial is: ",fact);
}
