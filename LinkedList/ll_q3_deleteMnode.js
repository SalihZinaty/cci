const LinkedList = require('./LinkedList');
const deleteMnode = (node) =>{
    node.val = node.next.val;
    node.next = node.next.next;
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
let Node;
let curr = myList.head;
for(let i=0; i<=2;i++){
    Node = curr;
    curr = curr.next;
}
deleteMnode(Node);
myList.printList();