const perm = (arr) => {
    let result;
    if(arr.length === 0){
        result.add('');
        return result;
    }
    for(let i = 0; i<arr.length ; i++){
        let before = arr.slice(0,i);
        let after = arr.slice(i+1,arr.length);
        let partials = perm((before+after).split(''));
        for(let s of partials){
            result.push(arr.charAt(i) + s);
        }
    }
    return list;
}
let arr = ['a','b','c','d'];
console.log(perm(arr));
;