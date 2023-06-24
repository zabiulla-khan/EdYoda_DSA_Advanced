//Q1.Delete the elements in an linked list whose sum is equal to zero
//Stack for global use
console.log("ANSWER 1")
class Stack {
    constructor() {
      this.length = 0;
      this.items = [];
      this.push = function (value) {
        this.items.push(value);
        this.length += 1;
      };
      this.pop = function () {
        if (this.length > 0) {
          this.items.pop();
          this.length -= 1;
        } else {
          return -1;
        }
      };
    }
  }
  //LinkedList for global use
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
      this.insertAt = (val, pos) => {
        if (pos < 0 || pos > this.size) {
          return console.log("Position is greater than size");
        } else {
          let node = new Node(val);
          let currNode;
          let count = 0;
          if (this.head == null) {
            this.head = node;
          } else if (pos == 0) {
            node.next = this.head;
            this.head = node;
          } else {
            currNode = this.head;
            while (count < pos - 1) {
              count++;
              currNode = currNode.next;
            }
            node.next = currNode.next;
            currNode.next = node;
          }
          this.size++;
        }
      };
  
      this.removeFrom = (pos) => {
        let currNode;
        let count = 0;
        if (pos < 0 || pos > this.size) {
          return console.log("Position is greater than size");
        }
        if (this.head == null) {
          return console.log("linked list does not exists");
        }
        if (pos == 0) {
          this.head = this.head.next;
        } else {
          currNode = this.head;
          while (count < pos - 1) {
            count++;
            currNode = currNode.next;
          }
          currNode.next = currNode.next.next;
        }
  
        this.size--;
      };
  
      this.mergeAlt = (list1, list2) => {
        let list1_curr = list1;
        let list2_curr = list2;
        let list1_next;
        let list2_next;
  
        while (list1_curr != null && list2_curr != null) {
          list1_next = list1_curr.next;
          list2_next = list2_curr.next;
  
          list2_curr.next = list1_next;
          list1_curr.next = list2_curr;
  
          list1_curr = list1_next;
          list2_curr = list2_next;
        }
  
        return list1;
      };
    }
    rotateBySize(k, head = this.head) {
      let current = head;
      let next = null;
      let prev = null;
      let i = 0;
      while (i < k && current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
      }
  
      if (next != null) head.next = this.rotateBySize(k, next);
  
      return prev;
    }
  }
  
  // Q2. Reverse a linked list in groups of given size
console.log("ANSWER 2")
  let size = 3;
  let linkedlist = new LinkedList();
  linkedlist.insertAt(12, 0);
  linkedlist.insertAt(15, 1);
  linkedlist.insertAt(16, 2);
  linkedlist.insertAt(16, 3);
  linkedlist.insertAt(18, 4);
  linkedlist.insertAt(11, 4);
  console.log("Rotation with size " + `${3}` + " is");
  console.log(linkedlist.rotateBySize(size));
  
  //============================================================================
  
  //Q3.Merge a linked list into another linked list at alternate positions.
console.log("ANSWER 3")
  let l1 = new LinkedList();
  let l2 = new LinkedList();
  l1.insertAt(1, 0);
  l1.insertAt(3, 1);
  l1.insertAt(5, 2);
  l2.insertAt(2, 0);
  l2.insertAt(4, 1);
  l2.insertAt(6, 2);
  console.log("first linked list");
  console.log(l1.head);
  console.log("second linked list");
  console.log(l2.head);
  console.log("merged linked list");
  console.log(l1.mergeAlt(l1.head, l2.head));
  
  //========================================================================
  
  //Q4. In an array, Count Pairs with given sum
console.log("ANSWER 4")
  let pairArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 8;
  const Countpair = (array, sum) => {
    let subArr = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] + array[j] == sum) {
          let subArr2 = [];
          subArr2.push(array[i]);
          subArr2.push(array[j]);
          subArr.push(subArr2);
        }
      }
    }
    return subArr.length;
  };
  console.log("Pair of = " + sum, Countpair(pairArr, sum));
  
  //===============================================================
  
  //Q5. Find duplicates in an array

console.log("ANSWER 5")
  let findDupArr = ["Bibhas", 2, 5, 4, 1, 2, 5, 7, 0, 1, "Bibhas"];
  const findDup = (array) => {
    dupArr = [];
    count = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          dupArr.push(array[i]);
        }
      }
    }
    return dupArr;
  };
  console.log("Duplicate items are " + findDup(findDupArr));
  
  //========================================================================
  
  //Q6. Find the Kth largest and Kth smallest number in an array

console.log("ANSWER 6")
  let min_k = 3;
  let max_k = 2;
  let flArr = [4, 6, 1, 44, 56, 38, 23, 5, 66];
  
  function InsertionSort(array) {
    let length = array.length;
  
    for (i = 1; i < length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
    return array;
  }
  const findLargest = (array, max, min) => {
    InsertionSort(array);
    let elem = [];
    let min_elem = array[min];
    let max_elem = array[array.length - 1 - max];
    elem.push(min_elem);
    elem.push(max_elem);
    return elem;
  };
  
  console.log(
    min_k +
      " " +
      "min" +
      " " +
      "&" +
      " " +
      max_k +
      " max elements are " +
      findLargest(flArr, max_k, min_k)
  );
  
  //============================================================================
  
  //Q7. Move all the negative elements to one side of the array
  console.log("ANSWER 7")
  let moveNArr = [51, -71, 64, -98, 34, 83, -12, 13, -43];
  const moveNegative = (array) => {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
    return array;
  };
  console.log(moveNegative(moveNArr));
// ===========================================================================

  //Q8. Reverse a string using a stack data structure

console.log("ANSWER 8")
  let strforRev = "Bibhas";
  const reverseStr = (string) => {
    let stack = new Stack();
    let revStr = "";
    for (let i = string.length - 1; i > -1; i--) {
      stack.push(string[i]);
    }
    for (j = 0; j < stack.length; j++) {
      revStr += stack.items[j];
    }
    return revStr;
  };
  console.log(reverseStr(strforRev));
  //====================================================================
  
  //Q9. Evaluate a postfix expression using stack

console.log("ANSWER 9")
  
  function postfixEval(postfixArray) {
    var stack = [];
  
    for (element of postfixArray) {
      console.log("element: " + element);
  
      if (isNaN(element)) {
        var x = stack.pop();
        var y = stack.pop();
        console.log("var x/y: " + x + " " + y + " element: " + element);
        if (element == "+") {
          result = y + x;
          stack.push(y + x);
        } else if (element == "-") {
          stack.push(y - x);
        } else if (element == "*") {
          stack.push(y * x);
        } else if (element == "/") {
          stack.push(y / x);
        }
      } else {
        stack.push(parseFloat(element));
      }
    }
  
    var returnValue = null;
    while (stack.length > 0) {
      console.log(stack);
      var element = stack.pop();
      if (isNaN(element)) {
        continue;
      } else {
        returnValue = element;
      }
    }
    return returnValue;
  }
  
  postfixEval(["7.7", "7", "+"]);
  
  //===========================================================
  
  //Q10. Implement a queue using the stack data structure

  console.log("ANSWER 10")
  let QueckArr = [23, 35, 13, 67, 44, 90, 101];
  
  class Queue {
    constructor() {
      this.stack = [];
      this.stack2 = [];
  
      this.enqueue = (val) => {
        while (this.stack.length > 0) {
          this.stack2.push(this.stack.pop());
        }
        this.stack.push(val);
        while (this.stack2.length != 0) {
          this.stack.push(this.stack2.pop());
        }
        return this.stack;
      };
      this.dequeue = () => {
        if (this.stack.length == 0) {
          return "Queue Empty";
        }
        let top = this.stack[this.stack.length - 1];
        this.stack.pop();
        return top;
      };
    }
  }
  let queue = new Queue();
  
  console.log(queue.enqueue(24));
  console.log(queue.enqueue(13));
  console.log(queue.enqueue(44));
  console.log(queue.enqueue(28));
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
