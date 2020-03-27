class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(this.length ===0){
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }
    dequeue(){
        if(this.length === 0) return null;
        const hold = this.first;
        if(this.first === this.last) {
            this.first = null;
            this.last = null;
            this.length--;
            return hold;
        }
        this.first = this.first.next;
        this.length--;
        return hold;
    }
}
let queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
queue.enqueue('fourth');
console.log(queue);
