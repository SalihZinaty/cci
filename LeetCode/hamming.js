var hammingDistance = function(x, y) {
    let arr1=[];
    let arr2=[];
    let ham = 0;
    let str1 = x.toString(2);
    let str2 = y.toString(2);
    if(str1.length > str2.length){
        arr2 = addzeros(str2,str1.length);
        arr1 = str1.split('');
    }
    else if(str2.length > str1.length){
        arr1 = addzeros(str1,str2.length);
        arr2 = str2.split('');
    }
    else{
        arr1 = str1.split('');
        arr2 = str2.split('');
    }
    for(let i=0 ; i<arr1.length ; i++){
        if(arr1[i] !== arr2[i]) ham++;
    }
    return ham;

};
const addzeros = (str,len) => {
    let arr = str.split('');
    let def = Math.abs(arr.length -len);
    for(let i = 0 ; i<def ; i++){
        arr.unshift('0');
    }
    return arr;
}
console.log(hammingDistance(3,1));