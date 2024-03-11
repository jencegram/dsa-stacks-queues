/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) { // If the queue is empty
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode; // Links the new node at the end of the queue
      this.last = newNode; // Updates the last pointer to the new node
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error("Queue is empty"); // Checks if queue is empty
    const temp = this.first;
    if (this.first === this.last) { // If there's only one item in the queue
      this.last = null; // Set the last pointer to null
    }
    this.first = this.first.next; // Move the first pointer to the next node
    this.size--;
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) throw new Error("Queue is empty"); // Check if the queue is empty
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
