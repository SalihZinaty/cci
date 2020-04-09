var threeSum = function(nums) {
    if(nums.length < 3) return [];
    let res=[];
    for(let i=0 ;i<nums.length ; i++){
        twoSum(nums,nums[i],i,res);
    }
    res = isUnique(res);
    return res;
};

const twoSum = (nums, target,idx,res) => {
    hash ={};
    for (let i=0 ; i<nums.length ; i++){
        if(i!==idx) hash[nums[i]] = i;
    }
    for (let i=0 ; i < nums.length ; i++){
        if( i !== idx){
            if(hash[-target - nums[i]] !== undefined && hash[-target - nums[i]] !== i ) {
                res.push([target,-target - nums[i],nums[i]]);
            };
        }
    }
    
};
const isUnique = (arr) => {
    if(arr.length === 0 ) return [];
    let hash = {};
    let unique = [];
    for(let i=0 ; i<arr.length ; i++){
        arr[i].sort((a,b) => a-b);
        let set = arr[i].join('');
        hash[set] = arr[i];
    }
    let keys = Object.keys(hash);
    for(let key of keys){
        unique.push(hash[key]);
    }
    return unique;
}

const arr= [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]

console.log(threeSum(arr));
