console.log("Merge Sort");

function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  // Create two temp arrays
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
      k++;
    } else {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  // Copy the remaining elements of LEFT array
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of RIGHT array
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  // base case
  if (left >= right) {
    return;
  }
  // find mid element
  let mid = left + Math.floor((right - left) / 2);

  // recursion call
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

let arr = [12, 11, 13, 5, 6, 7];
let size = arr.length;

console.log("before sorting");

console.log(arr);

mergeSort(arr, 0, size - 1);

console.log("after sorting");

console.log(arr);

// ===========================================================================================

console.log("Binary tree");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);

root.left = new Node(2);

root.right = new Node(3);

root.left.left = new Node(4);

root.left.right = new Node(5);

function postOrder(node) {
  if (node == null) {
    return;
  }

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.data);
}

postOrder(root);

// ====================================================================================================

console.log("Binary tree - sum of all nodes");
class Nodes {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let Root = new Nodes(1);

Root.left = new Nodes(2);

Root.right = new Nodes(3);

Root.left.left = new Nodes(4);

Root.left.right = new Nodes(5);

function sumAll(node) {
  if (node == null) {
    return 0;
  }

  let leftSum = sumAll(node.left);
  let rightSum = sumAll(node.right);

  return node.data + leftSum + rightSum;
}

console.log(sumAll(root));
