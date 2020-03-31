var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n < 0 ){
        let opp = -n;
        let ans = x*myPow(x,opp-1);
        return 1/ans;
    }
    if(n > 0)
        return x*myPow(x,n-1);
};

myPow(2,-2);