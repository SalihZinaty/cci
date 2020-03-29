const LinkedList = require('./LinkedList');
class Node{
    constructor(val){
        this.val = val,
        this.next = null
    }
}
const sumLists = (l1,l2) =>{
    let sum = new LinkedList();
    let len1 = 0; let len2 = 0;
    const head1 = l1.head;
    const head2 = l2.head;
    // check if the two lists are the same length, if not, put zeros
    for(let curr = head1 ; curr !== null ; curr = curr.next){
        len1++;
    }
    for(let curr = head2 ; curr !== null ; curr = curr.next){
        len2++;
    }
    let deff = len1>len2 ? (len1-le2) : (len2-len1);
    if(deff >0){
    if(len1<len2) addZeros(l1,deff);
    else addZeros(l2,deff);
    }
    // starting the sum
    let res = 0;
    let num2 = head2;
    let isum = sum.head;
    for(let num1 = head1 ; num1 !== null ; num1 = num1.next){
        let tmp = num1.val + num2.val + res;
        if(isum !==null) isum.val = tmp%10;
        else {
            sum.append(tmp%10);
            isum = sum.tail
        }
        res = Math.floor(tmp/10);
        num2 = num2.next;
        isum = isum.next;
    }
    if(res) sum.append(res);
    return sum;

}
const addZeros = (l,num) => {
    for(let i=0 ; i<num ; i++){
        l.append(0);
    }
}

const num1 = new LinkedList(5);
const num2 = new LinkedList(5);
const sum = sumLists(num1,num2);
sum.printList();
