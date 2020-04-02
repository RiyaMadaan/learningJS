let principle = process.argv[2];
let rate = process.argv[3];
let time = process.argv[4];

simpleInterest = (principle* rate* time)/100;
console.log("Simple interest:", simpleInterest);
return simpleInterest;
