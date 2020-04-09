const small = (A) => {
    let hash ={};
    for(let i=0 ; i<A.length ; i++){
        hash[A[i]] = true;
    }
    let nums = Object.keys(hash);
    for(let i=0 ; i<nums.length ; i++){
        let tmp = parseInt(nums[i]);
        nums[i] = tmp;
    }
    let i = nums[0];
    for(let j=0 ; j<nums.length ; j++){
        if(nums[j] > i) {
            if(i===0) return 1;
            else return i};
        i++;
    }
    if(nums[0] > 0) return nums[nums.length-1]+1;
    if(nums[0] < 0) return 1;
}
let A = [-1, -3];
console.log(small(A));
