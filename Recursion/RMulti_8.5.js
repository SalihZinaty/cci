const RMulti = (num,times) => {
    if(times ===0) return 0;
    if(times === 1) return num;
    return num + RMulti(num,times-1);
}
console.log(RMulti(1,5));