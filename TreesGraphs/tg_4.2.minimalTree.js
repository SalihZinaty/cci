const Node = require('./Node');
const minimalTree = (arr) => {
    if(!arr.length) return null;
    let root = new Node(arr[Math.ceil(arr.length/2-1)]);
    root.left =  minimalTree(arr.slice(0,Math.ceil(arr.length/2-1)));
    root.right = minimalTree(arr.slice(Math.ceil(arr.length/2)));
    return root;
}
arr = [1,2,3,4,5,6,7,8];
let root = minimalTree(arr);
console.log(root);
