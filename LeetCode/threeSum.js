var threeSum = function(nums) {
    let hash={};
    let res=[];
    for(let i=0 ; i<nums.length ; i++){
        if(hash[-nums[i]] === undefined){
            hash[-nums[i]] = [nums[i],1];
        }
        else hash[-nums[i]][1] = hash[-nums[i]][1] +1;
    }
    for(let i=0; i<nums.length ; i++){
        for(let j=i+1; j<nums.length; j++){
            let sum = nums[j]+nums[i];
            if(hash[sum] !== undefined){
                if(hash[sum][0] === nums[i] && hash[sum][0] === nums[j] && hash[sum][1]<3){
                    continue;
                }
                if(hash[sum][0] === nums[i] || hash[sum][0] === nums[j]){
                    if(hash[sum][1] > 1){
                        let checkUnique = isUnique(res,[hash[sum][0],nums[i],nums[j]])
                        if(checkUnique) {
                            let set = [hash[sum][0],nums[i],nums[j]];
                            set.sort((a,b) => a-b);
                            res.push(set);
                            continue;
                        }
                        else continue;
                    }
                    else continue;
                }
                let checkUnique = isUnique(res,[hash[sum][0],nums[i],nums[j]])
                if(checkUnique) {
                    let set = [hash[sum][0],nums[i],nums[j]];
                    set.sort((a,b) => a-b);
                    res.push(set);
                }
            } 
        }
            
    }
    return res;
};
const isUnique = (arr,set) => {
    if(arr.length === 0 ) return true;
    let tmpset = [...set];
    tmpset.sort((a,b) => a-b);
    tmpset = tmpset.join('');
    for(let i=0 ; i<arr.length ; i++){
        let tmp = [...arr[i]];
        tmp.sort((a,b) => a-b);
        tmp = tmp.join('');
        if(tmp === tmpset) return false;
    }
    return true;
}
let nums = [0,8,2,-9,-14,5,2,-5,-5,-9,-1,3,1,-8,0,-3,-12,2,11,9,13,-14,2,-15,4,10,9,7,14,-8,-2,-1,-15,-15,-2,8,-3,7,-12,8,6,2,-12,-8,1,-4,-3,5,13,-7,-1,11,-13,8,4,6,3,-2,-2,3,-2,3,9,-10,-4,-8,14,8,7,9,1,-2,-3,5,5,5,8,9,-5,6,-12,1,-5,12,-6,14,3,5,-11,8,-7,2,-12,9,8,-1,9,-1,-7,1,-7,1,14,-3,13,-4,-12,6,-9,-10,-10,-14,7,0,13,8,-9,1,-2,-5,-14];
console.log(threeSum(nums));
