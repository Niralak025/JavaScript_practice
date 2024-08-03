class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

const getFirst = (list) => {
    return list.head.data;
}

const getLast = (list) => {
    let lastNode = list.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode.data
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head.data)
console.log(list.head.next.data)

console.log(getFirst(list));
console.log(getLast(list));