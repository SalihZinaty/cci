class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val,node = this.root){
        if(node === null) {
            node = new Node(val);
            if(this.root === null){
                this.root = node;
            }
            else return node;
        }
        else if(node.val > val){
            node.left = this.insert(val, node.left);
        }
        else {
            node.right =  this.insert(val,node.right);
        }
        return node;
    }
    lookup(val,node = this.root){
        if(node === null) return false;
        if(node.val === val) return true;
        else if(node.val > val) return this.lookup(val,node.left);
        else return this.lookup(val,node.right);
    }
    traverse(node = this.root){
        const tree = {val: node.val};
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }
    remove(val, node = this.root){
        
    }
}

module.exports = BinarySearchTree;