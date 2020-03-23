class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val){
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }
    append(val){
        let newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }
    printList(){
        let arr = [];
        let i=0;
        for(let curr=this.head; curr !=null ; curr = curr.next){
            arr[i]=curr.val;
            i++;
        }
        console.log(arr.join('-->'));
    }
}
module.exports = LinkedList;