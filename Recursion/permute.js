var permute = function(nums) {
    if (nums.length ===0) return nums;
    let result = [];
    return permuteR(nums,result)
};

const permuteR = (nums) => {
    let result =[];
    if (nums.length === 0) {
        result.push([]);
        return result;
    }
    for(let i=0 ; i<nums.length;i++){
        let before = nums.slice(0,i);
        let after = nums.slice(i+1);
        let per = [...before,...after];
        let permutation = permuteR(per);
        for(let set in permutation)
            result.push([nums[i],...set]);
    }
    return result;
}

let arr = [1,2,3];
console.log(permute(arr));