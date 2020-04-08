let number = +process.argv[2];


if(number<0){
  for(let count = 0; count >= number ; count = count-2)
     console.log(count);
}
else{
  for(let count=0;count<=number;count = count+2)
     console.log(count);
}
