
let first = +process.argv[2];
let last = +process.argv[3];
let product = 1;
for(let i=first; i<=last;i++)
product = product * i;
console.log(product);
