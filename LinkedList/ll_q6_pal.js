const LinkedList = require('./LinkedList');
const pal = (head) =>{
    let arr = [];
    let i=0;
    for(let curr = head ; curr !== null ; curr = curr.next){
        arr[i] = curr.val;
        i++;
    }
    for(let curr = head ; curr!==null ; curr = curr.next){
        if(curr.val !== arr[i-1]) return false;
        i--;
    }
    return true;
}
const myList = new LinkedList(1);
myList.append(5);
myList.append(3);
myList.append(1);
myList.append(4);
myList.append(1);
myList.append(3);
myList.append(5);
myList.append(1);
myList.printList();
pal(myList.head);