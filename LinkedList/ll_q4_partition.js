const LinkedList = require('./LinkedList');
const partition = (head) =>{
    let i=0;
    let arr=[];
    for(let curr=head;curr!==null;curr=curr.next){
        arr[i] = curr.val;
        i++;
    }
    arr.sort();
    i=0;
    for(let curr=head;curr!=null;curr=curr.next){
        curr.val = arr[i];
        i++
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
partition(myList.head);
myList.printList();