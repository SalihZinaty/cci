const LinkedList = require('../LinkedList/LinkedList');

var reverseList = function(head) {
    if(head.next === null) return head;
    let tmp = head.next;
    let tmp2 = tmp.next;
    le
    reverseList(head.next);
};

let list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(reverseList(list.head));

