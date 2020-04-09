const towSum = (nums) => {
    let hash = {};
    let result = [];
    for(let i=0; i<nums.length ; i++){
        hash[nums[i]] = i;
    }

    for(let i=0 ;i<nums.length ; i++){
        let opp = -nums[i];
        if(hash[opp] !== undefined && hash[opp] !== i) result.push([nums[i],hash[opp]]);
    }
    return result;
}

let arr = [-1,0,1,2,0,0,-2,1,3,1];
console.log(towSum(arr));
