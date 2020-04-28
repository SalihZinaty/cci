var isLongPressedName = function(name, typed) {
    if(name.length > typed.length) return false;
    let nameHash = {};
    let typedHash = {};
    for(let i=0 ; i<name.length ; i++){
        if(nameHash[name[i]] === undefined) nameHash[name[i]] = 1;
        else nameHash[name[i]] = nameHash[name[i]] +1;
    }
    
    for(let i=0 ; i<typed.length ; i++){
        if(typedHash[typed[i]] === undefined) typedHash[typed[i]] = 1;
        else typedHash[typed[i]] = typedHash[typed[i]] +1;
    }
    
    let nameKeys = Object.keys(nameHash);
    let typedKeys = Object.keys(typedHash);
    
    if(typedKeys.length > nameKeys.length) return false;
    
    for(let key of nameKeys){
        if(nameHash[key] > typedHash[key]) return false;
    }
    return true;
}
console.log(isLongPressedName("xnhtq","xhhttqq"));