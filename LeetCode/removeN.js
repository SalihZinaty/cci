const LinkedList = require('../LinkedList/LinkedList');
var removeNthFromEnd = function(head, n) {
    let listLen=0;
    for(let curr=head ; curr !==null ; curr = curr.next){
        listLen++;
    }
    if(listLen<2) {
        head = null;
        return head;
    };
    let pos = listLen-n+1;
    let idx=1;
    for(let curr = head ; curr !==null ; curr = curr.next){
        if(idx === pos){
            let tmp = curr.next.next;
            curr.next = tmp;
            break;
        }
        else idx++;
    }
    return head;
};
let list = new LinkedList(1);
list.append(2);

console.log(removeNthFromEnd(list.head,2));