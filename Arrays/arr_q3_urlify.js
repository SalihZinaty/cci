const urlify = (str,rlen) => {
    let i=0;
    for(i=0; i<str.length ; i++){
        if(str[i] !== " ") break;
    }
    let rstr = "";
    for( let j= i ; j<i+rlen ; j++){
        if(str[j] === " ") rstr = rstr + "%20";
        else rstr = rstr + str[j];
    }
    return rstr;
}
const str = "           Mr John Smith     ";
console.log(urlify(str,13));