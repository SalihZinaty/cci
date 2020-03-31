const TripleStep = () => {
    let cache = {};
    return (function triple(n) {
        if(n in cache) return cache[n];
        else if(n < 0 ) return 0;
        else if(n === 0) return 1;
        else{
            cache[n] = triple(n-1) + triple(n-2) + triple(n-3);
            return cache[n];
        }
    })
}
console.log(TripleStep()(40));
