const lengthOfLongestSubstring = (s) => {
    let hash = {};
    let maxLength = 0;
    let tmpLength = 0;
    let idx = 0;
    let i=0;
    while(idx < s.length){
        if(hash[s[i]] === undefined && s[i] !== undefined) {
            hash[s[i]] = true;
            tmpLength++;
        }
        else{
            hash = {};
            if(tmpLength > maxLength)
                maxLength = tmpLength;
            tmpLength = 0 ;
            idx++;
            i=idx;
            continue;
        }
        i++;
    }
    return maxLength;
}
let str  = "bbbbb";
console.log(lengthOfLongestSubstring(str));
