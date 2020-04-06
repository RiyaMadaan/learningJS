let first = +process.argv[2];
let second = +process.argv[3];

for(i=1; i <= first&& i <= second; ++i)
    {
        if(first%i==0 && second%i==0)
            gcd = i;
    }

    console.log("G.C.D is",  gcd);

    return 0;
