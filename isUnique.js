//Arrays - Q1
// I emplemented this using hash table - O(n).
// the primitive solution is using nested loops - O(n^2).
const isUnique = (str) => {
    const hash = {};
    for (let i=0 ; i< str.length ; i++){
        if(hash[str[i]] === undefined) hash[str[i]] = true;
        else return false;
    }
    return true;
}
const str = "abcdd";
console.log(isUnique(str));