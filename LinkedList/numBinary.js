const ones = (n) => {
    let count =0;
    while (n !== 0 ) {
        let res = n%2;
        if(res === 1) count++;
        n=Math.floor(n/2);
    }
    return count;
}
let N = 3000;
let Ns = parseInt(N.toString(2));
console.log(Ns);
let count = 0;
while(N !== 0 ){
    let res = N%2;
    if(res === 1) count++;
    N=Math.floor(N/2);
}
N=3000;
console.log('toString',count,'ones function',ones(N));