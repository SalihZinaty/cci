const LinkedList = require('./LinkedList');
const removeDups = (head) =>{
    let hash = {};
    let curr = head;
    let prev = null;
    while(curr){
        if(hash[curr.val]){
            prev.next = curr.next;
        }
        else{
            hash[curr.val] = true;
            prev = curr;
        }
        curr = curr.next;
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