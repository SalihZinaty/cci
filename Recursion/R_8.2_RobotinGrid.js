class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
const RobotinGrid = (root,val) => {
    if(root.left) RobotinGrid(root.left);
    if(root.val === val) return true;
    if(root.right) RobotinGrid(root.right);
    if(!root.right && !root.left){
        if(root.val === val) return true;
        else return false;
    }
}
// Grid 
let point = [new Point(1,2)];
let r = 7;
let c = 10;
let grid = new Array(r);
for (let i = 0 ; i<grid.length ; i++){
    grid[i] = new Array(c);
}
console.log(RobotinGrid(grid,m*n));