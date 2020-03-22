const oneWay = (str1,str2) => {
    if(str1 === str2) return true;
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let changes = 0;
    let deff = (arr1.length - arr2.length) > 0 ? (arr1.length - arr2.length) : (arr2.length - arr1.length);
    if(deff > 1) return false;
    if(deff === 0){
        for(let i=0 ; i<arr1.length ; i++){
            if(arr1[i] !== arr2[i]) changes++;
        }
        if(changes > 1) return false;
        else return true;
    }
    changes = 0;
    let maxarr = arr1.length > arr2.length ? arr1 : arr2;
    let i=0 ; j=0;
    while(i<maxarr.length){
        if(arr1[i] !== arr2[j]){
            changes++;
            if(changes > 1) return false;
            i++
        }
        else{
            i++;
            j++;
        }
    }
    return true;
}
str1 = "pale";
str2 = "ple";
str3 = "pales";
str4 = "bale";
str5 = "bake";
console.log(oneWay(str1,str5));