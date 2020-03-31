const BinarySearchTree = require('./BinarySearchTree');
const balancedTree = (root) => {
    if(!root) return 0;
    let Lhight = 1+ balancedTree(root.left);
    let Rhight = 1+ balancedTree(root.right);
    if(Lhight>Rhight+1 || Rhight > Lhight+1) return false;
    else return true
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(20);
tree.insert(40);
tree.insert(1);
tree.insert(11);
console.log(balancedTree(tree.root));