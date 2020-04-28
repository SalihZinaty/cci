const LinkedList = require('./LinkedList');

var deleteDuplicates = function(head) {
    
    if(head === null) return null;
    let isDup = false;
    let prev = head;
    let next = head.next;
    let curr = head;
    while(curr !==null){
        if(next!==null && (curr.val ===next.val)){
            isDup = true;
            while((next !== null) && (curr.val === next.val)){
                next = next.next;
            }
            if(curr === head){
                head = next;
                curr = head;
                if(curr !== null)
                    next = head.next;
                else break;
                prev = head;
            }
            else{
                prev.next = next;
                curr = next;
                if(curr !== null)
                    next = curr.next;
                else break;
            }

        }
        if(!isDup){
            prev = curr;
            curr = curr.next;
            if(curr === null) break;
            if(curr.next !== null) next = curr.next;
            else next = null;
        }
        else isDup = false;
    }
    
    return head
}
let list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(3);
list.append(4);
list.append(4);
list.append(5);

console.log(deleteDuplicates(list.head));
