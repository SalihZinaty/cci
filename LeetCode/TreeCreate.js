class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const sortedArrayToBST = (nums) => {
    if(!nums) return null;
    let root = new TreeNode(nums[Math.floor(nums.length/2)]);
    return modDFS(root,nums,0);
};

const modDFS = (root,nums,idx) => {
    if(idx === nums.length) return root;
    if(nums[idx] < root.val){
        root.left = new TreeNode(nums[idx]);
        modDFS(root.left,nums,idx+1);
    }
    if(nums[idx] > root.val){
        root.right = new TreeNode(nums[idx]);
        modDFS(root.right,nums,idx+1);
    }
    return root
}

let arr = [-10,-3,0,5,9];
let root = sortedArrayToBST(arr);
console.log(root);