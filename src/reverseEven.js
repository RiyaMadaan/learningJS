let input = +process.argv[2];

if(input%2 != 0){
  console.log("enter even number only");
}
else{
do{
  number = input-2;
  console.log(number);
  input = input-2;
}
while(input > 2)
return number;
}
