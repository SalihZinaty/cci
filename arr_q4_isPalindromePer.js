const isPermutation = (str) => {
    let hash = {};
    let strLower = str.toLowerCase();
    let arr = strLower.split('');
    let keys =[];
    for(let i=0 ; i<arr.length ; i++){
        if(hash[arr[i]] === undefined){
            hash[arr[i]]=1;
            keys.push(arr[i]);
        } 
        else {
            hash[arr[i]] = hash[arr[i]]+1;
        }
    }
    if(keys.length ===1) return true;
    let unique = 0;
    let sanity = 0;
    for(let i=0 ; i<keys.length;i++){
        if(hash[keys[i]] === 1 && keys[i]!== ' ') {
            unique++;
            if(unique > 1) return false;
        }
        if(hash[keys[i]] > 2 && keys[i] !== ' '){
            sanity++;
            if(sanity > 1) return false;
        }
    }
    return true;
}
const str = "Tact aoa"
console.log(isPermutation(str));