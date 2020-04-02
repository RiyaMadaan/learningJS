let number = +process.argv[2];

let product = 1;
let i = 1;
do{
  product = product * i;
  i = i+1;
}
while(i<=number){
  console.log(product);
  return product;
}
