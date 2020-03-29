const BinarySearchTree = require('./BinarySearchTree');
class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const listOfDepth = (root) => {
    let depth = depthEmf([[root,0]],[]);
    let hash = {};
    for(let i=0 ; i<depth.length;i++){
        if(hash[depth[i][1]] === undefined){
            let newNode = new ListNode(depth[i][0].val);
            hash[depth[i][1]] = newNode;
        }
        else {
            let curr =  hash[depth[i][1]];
            while(curr.next !==null) curr = curr.next;
            curr.next = new ListNode(depth[i][0].val);
        }
    }
    return hash;
}
const depthEmf = (queue,list) => {
    if(!queue.length) return list;
    let currNode = queue.shift();
    list.push(currNode);
    if(currNode[0].left) queue.push([currNode[0].left,currNode[1]+1]);
    if(currNode[0].right) queue.push([currNode[0].right,currNode[1]+1]);
    return depthEmf(queue,list);
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(1);
tree.insert(11);
console.log(listOfDepth(tree.root));

