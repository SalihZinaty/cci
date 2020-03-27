class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.min = [];
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(val){
        const newNode = new Node(val);
        if(this.length ===0){
            this.top = newNode;
            this.bottom = newNode;
            this.min = [val];
            this.length++;
            return this;
        }
        if(this.min > val) (this.min).push(val);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(this.top === this.bottom) {
            this.min = this.top.val;
            this.top = null;
            this.bottom =null;
            this.length--;
            return null;
        }
        if(this.length ===0) {
            this.min = null;
            return null;
        }
        if(this.min[this.min.length-1] === this.top.val) this.min.pop();
        this.top = this.top.next;
        this.length--;
        return this;
    }
    minimum(){
        if(this.length === 0) return null;
        return this.min[this.min.length-1];
    }
}
let stack = new Stack();
stack.push(1);
console.log(stack.minimum());
stack.push(5);
console.log(stack.minimum());
stack.push(3);
console.log(stack.minimum());
stack.push(-1);
console.log(stack.minimum());
stack.push(7);
console.log(stack.minimum());
stack.push(8);
console.log(stack.minimum());
stack.pop();
console.log(stack.minimum());
stack.pop();
console.log(stack.minimum());
stack.pop();
console.log(stack.minimum());
console.log(stack);
