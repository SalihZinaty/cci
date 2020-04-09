const bikes = (A) => {
    let hash={};
    let dest = {}
    for(let i=0; i<A.length ; i++){
        hash[A[i]] = false;
    }
    let nums = sorthash(hash);
    let position = nums[0];
    let first = nums[0];
    let last = nums[0];
    let i=0;
    while(i < nums.length ){
        if(nums[i] > position) {
            hash[position] = true;
            position++
            continue;
        }
        i++;
        position++;
    }
    i=0;
    let count =0;
    let nums2 = sorthash(hash);

    let start = nums2[0];
    let end = nums2[0];
    while(i<nums2.length){
        if(!hash[nums2[i]] && (count ===0)) start = nums2[i];
        else if(hash[nums2[i]]){
            count++;
        }
        else {
            end = nums2[i];
            for(let k=start+1 ; k<end ; k++){
                    let mindest = Math.min(Math.abs(k-start),Math.abs(end-k));
                    dest[k] = mindest;
            }

            count=0;
            start = end;

        }
        i++;
    }
    let num3 = sorthash(dest);
    if(num3.length ===0) return 0;
    let maxdest = dest[num3[0]];
    for(let i=0 ; i<num3.length ; i++){
        if(dest[num3[i]] > maxdest) maxdest = dest[num3[i]];
    }
    return maxdest
    
}

const sorthash = (hash) => {
    let nums2 = Object.keys(hash);
    for(let i=0 ; i<nums2.length ; i++){
        let tmp = parseInt(nums2[i]);
        nums2[i] = tmp;
    }
    nums2.sort(function(a, b){return a-b});
    return nums2;
}

A=[5,5];
console.log(bikes(A));