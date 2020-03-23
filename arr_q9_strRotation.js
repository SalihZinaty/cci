const strRot = (str1,str2) => {
    if(str1.length !== str2.length) return false;
    let found = false;
    for(let i=0; i<str1.length;i++){
        if(str2[i] === str1[0]){
            found = true;
            for(let j=0  ; j<str1.length ; j++){
                if(str2[(i+j)%(str1.length)] !== str1[j]) return false;
            }
        }
    }
    if(found) return true;
    else return false;
}
let str1 = "waterbottle";
let str2 = "erbttlewat";
console.log(strRot(str1,str2));