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
const removeDups = (head) =>{
    hash = {};
    for(let curr = head; curr!=null;curr = curr.next){
        hash[curr.val] = 0;
    }
    for(let curr = head; curr!=null ; curr=curr.next){
        console.log(curr.val);
        hash[curr.val] = hash[curr.val]+1;
        if( curr.next != undefined && hash[curr.next.val]>=1){
            curr.next = curr.next.next;
        }
    }
}
const myList = new LinkedList(1);
myList.append(5);
myList.append(3);
myList.append(1);
myList.append(4);
myList.append(4);
myList.append(5);
myList.append(5);
myList.append(1);
myList.printList();
removeDups(myList.head);
myList.printList();