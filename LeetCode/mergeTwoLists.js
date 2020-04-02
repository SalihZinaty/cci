class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
var mergeTwoLists = function(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let merged = new ListNode();
    let curr3 = merged;
    while(curr1 !==null || curr2 !==null){
        if(curr1 !==null && curr2 !==null){
            if(curr1.val <= curr2.val){
                if(curr3.next ===null){
                    curr3.next = new ListNode(curr1.val);
                }
                else curr3.next.val = curr1.val;
                curr3 = curr3.next;
                curr1 = curr1.next;

            }
            else{
                if(curr3.next === null) curr3.next = new ListNode(curr2.val);
                else curr3.next.val = curr2.val;
                curr3 = curr3.next;
                curr2 = curr2.next;
            }
        }
        else if(curr1 ===null && curr2 !== null){
            if(curr3.next ===null) curr3.next = new ListNode(curr2.val);
            else curr3.val = curr2.val;
            curr3 = curr3.next;
            curr2 = curr2.next;
        }
        else if(curr1 !==null && curr2 === null){
            if(curr3.next ===null) curr3.next = new ListNode(curr1.val);
            else curr3.next.val = curr1.val;
            curr3 = curr3.next;
            curr1 = curr1.next;
        }
    }
    merged = merged.next;
    return merged;
};
let l1 = new ListNode(1);
let curr = l1;
curr.next = new ListNode(2);
curr = curr.next;
curr.next = new ListNode(4);

let l2 = new ListNode(1);
curr = l2;
curr.next = new ListNode(3);
curr = curr.next;
curr.next = new ListNode(4);
console.log('list1',l1,'list2',l2);
console.log(mergeTwoLists(l1,l2));
;