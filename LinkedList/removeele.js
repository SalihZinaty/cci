const LinkedList = require('./LinkedList');

var removeElements = function(head, val) {
    if(head === null) return null;
    let curr = head;
    let prev = head;
    while(curr !== null){
        if(curr.val === val){
            if(curr === head){
                head = curr.next;
                curr = head;
                prev = curr;
                continue;
            }
            else {
                prev.next = curr.next;
                continue;
            }
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
};

let l = new LinkedList(1);
l.append(1);
console.log(removeElements(l.head,1))

