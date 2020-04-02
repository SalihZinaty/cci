var singleNumber = function(nums) {
    hash={};
    for(let i=0 ; i<nums.length ; i++){
        hash[nums[i]] = 0;
    }
    for(let i=0 ; i<nums.length ; i++){
        hash[nums[i]] = hash[nums[i]]+1;
    }
    let keys = Object.keys(hash);
    for(let key of keys){
        if(hash[key] !== 2) return key;
    }
    
};
let arr = [2,2,1];
console.log(singleNumber(arr));