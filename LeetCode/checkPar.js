var isValid = function(s) {
    const arr = s.split('');
    let stack = [];idx=0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === '('){
            stack[idx] = ')';
            idx++;
        }
        else if(arr[i] === '['){
            stack[idx] = ']';
            idx++;
        }
        else if(arr[i] === '{'){
            stack[idx] = '}';
            idx++;
        }
    }
    for(let i=0; i<arr.length ; i++){
        if(arr[i] !=='(' && arr[i] !=='[' && arr[i] !=='{'){
            if(arr[i] === stack[stack.length-1]) stack.pop();
            else return false;
        }
    }
    return true;
};
let str = '()[]{}';
console.log(isValid(str));