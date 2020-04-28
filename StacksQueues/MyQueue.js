class MyQueue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
        this.length = 0;
    }
    enqueue(val){
        if(this.stack1.length === 0) {
            this.stack1.push(val);
            this.length++;
        }
        else{
            while(this.stack1.length !==0){
                this.stack2.push(this.stack1.pop());
            }
            this.stack1.push(val);
            while(this.stack2.length !==0){
                this.stack1.push(this.stack2.pop());
            }
            this.length++;
        }
        return this;
    }
    dequeue(){
        this.stack1.pop();
        this.length--;
        return this;
    }
    peek(){
        return this.stack1[this.stack1.length-1];
    }
}

let queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);
