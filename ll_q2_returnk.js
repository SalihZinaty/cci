const LinkedList = require('./LinkedList');
const returnK = (head,k) =>{
    let i=0;
    let found;
    for(let curr = head; curr!=null;curr = curr.next){
        if(i ===k)  {
            found = curr;
            break;
        }
        i++;
    }
    let foundList = new LinkedList();
    foundList.head = found;
    return foundList;

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
let myKlist = returnK(myList.head,4);
myKlist.printList();