const LinkedList = require('./LinkedList');
const intersect = (head) =>{
    let map  = new Map();

}
// LL1
const list1 = new LinkedList(1);
list1.append(5);
list1.append(3);
list1.append(1);
list1.append(4);
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(1);
list1.printList();
// LL2
const list2 = new LinkedList(8);
list2.append(3);
list2.append(5);
list2.printList();
curr1 = list1.head;
curr2 = list2.head;
while(curr2.next !== null){
    curr1 = curr1.next;
    curr2 = curr2.next;
}
curr2.next = curr1;
let curr = list1.head;
let b = list1.head;
let c = list2.head;
list2.printList();
let hash = new WeakMap();
hash.set(curr);
hash[curr] = true;
console.log(hash);