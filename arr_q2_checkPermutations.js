// the iterative solution: search for the first letter, then start comparing all the latters. it takes O(n^2)
const checkPermutations = (str1,str2) => {
    if (str1.length != str2.length) return false;
    let first = str1[0];
    for ( let i = 0 ; i < str2.length ; i++){
        if(str2[i] === first){
            for ( let j = 1 ; j<str1.length ; j++){
                if(!(str2[(i+j) % str1.length] === str1[j])) return false;
            }
        }
    }
    return true;
}

const str1 = "abcd";
const str2 = "abad";
console.log('iterative',checkPermutations(str1,str2));