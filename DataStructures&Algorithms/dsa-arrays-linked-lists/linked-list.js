/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    let temp = this.head;

    this.head = newNode;
    this.head.next = temp;

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let prev;
    this.length === 1
      ? (prev = this.getAt(this.length - 1))
      : (prev = this.getAt(this.length - 2));

    const remove = prev.next;
    this.tail = prev;
    prev.next = null;
    this.length -= 1;
    // if (remove === null) {
    //   return null;
    // }
    return remove.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List Empty");
    }
    const temp = this.head;
    const removeVal = this.head.val;
    if (this.length === 1) {
      this.head.val = null;
      this.tail.val = null;
      this.length -= 1;
      return removeVal;
    }

    this.head = this.head.next;
    this.length -= 1;
    return temp.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    let curr = this.head;
    for (let i = 1; i <= idx; i++) {
      curr = curr.next;
    }
    return curr;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr = this.getAt(idx);
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) return this.unshift(val);
    let prev = this.getAt(idx - 1);
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    if (idx === this.length - 1) {
      return this.pop();
    }
    if (idx === 0) {
      return this.shift();
    }

    let prev = this.getAt(idx - 1);
    let remove = this.getAt(idx);

    prev.next = remove.next;
    this.length -= 1;
    return remove;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total;
    if (this.length === 0) return 0;
    total = this.head.val;
    while (this.head.next) {
      total += this.head.next.val;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;

const list = new LinkedList();
list.unshift(5);
list.unshift(10);
list.unshift(15);
console.log(list.pop());

// console.log(list);
