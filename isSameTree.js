var groupAnagrams = function(strs) {
    const hash = {};
    const names=[];
    const result=[];
    for (let i=0 ; i<strs.length ; i++){
        let strToarr = ((strs[i]).split('')).sort();
        let str = strToarr.join('');
        if(hash[str] === undefined) {
            names.push(str);
            hash[str] = [strs[i]];
        }
        else hash[str].push(strs[i]);
    }
    for(let i=0 ; i<names.length;i++){
        result.push(hash[names[i]]);
    }
    return result
};
let arr =  ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr))