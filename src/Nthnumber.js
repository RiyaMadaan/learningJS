let first = +process.argv[2];
let last = +process.argv[3];
let position = +process.argv[4];

for(i=1;i<=last;i++){
  console.log(i);
   i= i + (position-1);
}
