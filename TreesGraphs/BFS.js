const BinarySearchTree = require('./BinarySearchTree');
const BFS = (queue,list) => {
    if(!queue.length) return list;
    let currNode = queue.shift();
    list.push(currNode.val);
    if(currNode.left) queue.push(currNode.left);
    if(currNode.right) queue.push(currNode.right);
    return BFS(queue,list);
}
