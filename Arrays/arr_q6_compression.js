const compression = (str) => {
    let arr = str.split('');
    let compressed = "";
    let curr=arr[0];
    let count=0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] === curr) count++;
        else{
            compressed = compressed + curr + count;
            curr=arr[i];
            count = 1;
        }
    }
    compressed = compressed + curr + count;
    return compressed.length > str.length ? str : compressed;
}
str = "aabcccccaaa"
console.log(compression(str));