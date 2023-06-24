console.clear()
//que-1 Implement Binary tree===============================================

class BinaryTreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

// que - 2 Find height of a given tree=============================================

class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
		if (node == null)
			return -1;
		else
		{
			/* compute the depth of each subtree */
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		document.write("Height of tree is : " +maxDepth(root));

// que - 3 perform Pre-order, Post-order, In-order traversal====================
class BinaryTree {
  constructor(key, value = key) {
    this.root = new BinaryTreeNode(key, value);
  }

  *inOrderTraversal(node = this.root) {
    if (node.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node.right) yield* this.inOrderTraversal(node.right);
  }

  *postOrderTraversal(node = this.root) {
    if (node.left) yield* this.postOrderTraversal(node.left);
    if (node.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.left) yield* this.preOrderTraversal(node.left);
    if (node.right) yield* this.preOrderTraversal(node.right);
  }
}


  // Que - 4 Function to print all the leaves in a given binary tree===================
  
class Nodeone{
    constructor()
    {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};
 
function printLeafNodes(root)
{
     
    if (root == null)
        return;
     
    if (root.left == null &&
        root.right == null)
    {
        document.write(root.data + " ");
        return;
    }

    if (root.left != null)
        printLeafNodes(root.left);
         
    if (root.right != null)
        printLeafNodes(root.right);
}
 

function newNode(data)
{
    var temp = new Nodeone();
    temp.data = data;
    temp.left = null;
    temp.right = null;
    return temp;
}
 
// Driver code

var root1 = newNode(1);
root1.left = newNode(2);
root1.right = newNode(3);
root1.left.left = newNode(4);
root1.right.left = newNode(5);
root1.right.right = newNode(8);
root1.right.left.left = newNode(6);
root1.right.left.right = newNode(7);
root1.right.right.left = newNode(9);
root1.right.right.right = newNode(10);
 

printLeafNodes(root1);

//Que - 5 Implement BFS (Breath First Search) and DFS (Depth First Search)=======================

class BinarySearchTree {
  
  constructor(){
    this.root = null;
  }
  
  // add a node to the tree
  add(value){
    let newNode = { value, left: null, right: null};
    
    // set the root if we don't have one
    if(this.root == null){
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    
    while(true){
      // check for right
      if(value > current.value){
        // add right
        if(!current.right){ current.right = newNode; break; }
        
        current = current.right;
        
      // check for left 
      } else if(value < current.value){
        // add left
        if(!current.left){ current.left = newNode; break; }
        
        current = current.left;
      } else {
        // if it's the same ignore
        break;
      }
    }
  }

  // search for a specific value
  contains(value){
    let current = this.root;

    while(current){
      if(current.value == value){
        return true;
      } else if (current.value > value){
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

class DepthFirstTraverser extends BinarySearchTree {
  // pre-order -> root, left, right
  // in-order -> left, root, right
  // post-order -> left, right, root
  consstructor(){
    this.traverseMethod = 'pre-order';
  }

  setTraverseMethod(traverseMethod){
    if(traverseMethod == 'pre-order' || traverseMethod == 'in-order' || traverseMethod == 'post-order'){
      this.traverseMethod = traverseMethod;
    } else {
      console.error('Not a valid search method, must be "pre-order", "in-order" or "post-order"');
    }
  }

  getTraverseMethod(){
    return this.traverseMethod;
  }

  traverse(){
    switch(this.traverseMethod){
      case 'pre-order':
        this.preOrderTraverse(value);
        break;
      case 'in-order':
        this.inOrderTraverse(value);
        break;
      case 'post-order':
        this.postOrderTraverse(value);
        break;
      default:
        console.error('invalid traverse method');
    }
  }
  preOrderTraverse(value){
  }
  inOrderTraverse(value){
  }
  postOrderTraverse(value){
  }
}

class BreadthFirstTraverser extends BinarySearchTree {
  traverse(value){

  }
}

//Que - 6 Find sum of all left leaves in a given Binary Tree ===============================

class Node
{
    constructor(k)
    {
        this.data = k;
        this.left = null;
        this.right = null;
    }

}

// A utility function to check if a given node is leaf or not
function isLeaf(node)
{
    if (node == null)
        return false;
    if (node.left == null && node.right == null)
        return true;
    return false;
}

// This function returns sum of all left leaves in a given
 // binary tree
function leftLeavesSum(node)
{

    // Initialize result
    let res = 0;

    // Update result if root is not NULL
    if (node != null)
    {

        // If left of root is NULL, then add key of
        // left child
        if (isLeaf(node.left))
            res += node.left.data;
        else // Else recur for left child of root
            res += leftLeavesSum(node.left);

        // Recur for right child of root and update res
        res += leftLeavesSum(node.right);
    }

    // return result
    return res;
}

// Driver program
root = new Node(20);
root.left = new Node(9);
root.right = new Node(49);
root.left.right = new Node(12);
root.left.left = new Node(5);
root.right.left = new Node(23);
root.right.right = new Node(52);
root.left.right.right = new Node(12);
root.right.right.left = new Node(50);

document.write("The sum of leaves is " +leftLeavesSum(root));


// Que - 7 Find sum of all nodes of the given perfect binary tree===============================

function sumNodes(l)
{
    // no of leaf nodes
    let leafNodeCount = Math.pow(2, l - 1);

    // list of vector to store
    // nodes of all of the levels
    let vec = [];

    //initialize
    for (let i = 1; i <= l; i++)
    {
        vec.push([]);
    }

    // store the nodes of last level
    // i.e., the leaf nodes
    for (let i = 1; i <= leafNodeCount; i++)
    {
        vec[l - 1].push(i);
    }

    // store nodes of rest of
    // the level by moving in
    // bottom-up manner
    for (let i = l - 2; i >= 0; i--)
    {
        let k = 0;

        // loop to calculate values
        // of parent nodes from the
        // children nodes of lower level
        while (k < vec[i + 1].length - 1)
        {

            // store the value of parent
            // node as sum of children nodes
            vec[i].push(vec[i + 1][k] + vec[i + 1][k + 1]);
            k += 2;
        }
    }

    let sum = 0;

    // traverse the list of vector
    // and calculate the sum
    for (let i = 0; i < l; i++)
    {
        for (let j = 0; j < vec[i].length; j++)
        {
            sum += vec[i][j];
        }
    }

    return sum;
}

let l = 3;

document.write(sumNodes(l));


//Que - 8 Count subtress that sum up to a given value x in a binary tree=================================

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

// Function to get a new node
function getNode(data) {
    // Allocate space
    let newNode
        = new Node(data);
    return newNode;
}

// Function to find digit sum of number
function digitSum(N) {
    let sum = 0;
    while (N) {
        sum += N % 10;
        N = Math.floor(N / 10);
    }
    return sum;
}

// Function to replace all the nodes
// with their digit sums using pre-order
function replaceNodes(root) {
    if (!root)
        return;

    // Assigning digit sum value
    root.data = digitSum(root.data);

    // Calling left sub-tree
    replaceNodes(root.left);

    // Calling right sub-tree
    replaceNodes(root.right);
}

// Function to count subtrees that
// Sum up to a given value x
function countSubtreesWithSumX(root,
    count, x) {
    // If tree is empty
    if (!root)
        return 0;

    // Sum of nodes in the left subtree
    let ls = countSubtreesWithSumX(
        root.left, count, x);

    // Sum of nodes in the right subtree
    let rs = countSubtreesWithSumX(
        root.right, count, x);

    // Sum of nodes in the subtree rooted
    // with 'root.data'
    let sum = ls + rs + root.data;

    // If true
    if (sum == x)
        count++;

    // Return subtree's nodes sum
    return sum;
}

// Utility function to count subtrees that
// sum up to a given value x
function countSubtreesWithSumXUtil(root, x) {
    // If tree is empty
    if (!root)
        return 0;

    let count = 0;

    // Sum of nodes in the left subtree
    let ls = countSubtreesWithSumX(
        root.left, count, x);

    // sum of nodes in the right subtree
    let rs = countSubtreesWithSumX(
        root.right, count, x);

    // If tree's nodes sum == x
    if ((ls + rs + root.data) == x)
        count++;

    // Required count of subtrees
    return count;
}

// Driver program to test above

let N = 7;
/* Binary tree creation
       10         
      /   \
    2       3
  /  \     /  \  
 9    3    4   7
*/
let root = getNode(10);
root.left = getNode(2);
root.right = getNode(3);
root.left.left = getNode(9);
root.left.right = getNode(3);
root.right.left = getNode(4);
root.right.right = getNode(7);

// Replacing nodes with their
// digit sum value
replaceNodes(root);

let X = 29;

document.write(countSubtreesWithSumXUtil(root, X));


//Que - 9 Find maximum level sum in Binary Tree=====================================================

class Node
    {
        constructor(data)
        {
            this.data = data;
            this.left = this.right = null;
        }
    }
     
// Function to find the maximum
// sum of a level in tree
// using level order traversal   
function maxLevelSum(root)
{
    // Base case
    if (root == null)
        return 0;
  
    // Initialize result
    let result = root.data;
  
    // Do Level order traversal keeping
    // track of number of nodes at every
    // level.
    let q = [];
    q.push(root);
    while (q.length!=0)
    {
          
        // Get the size of queue when the
        // level order traversal for one
        // level finishes
        let count = q.length;
  
        // Iterate for all the nodes
        // in the queue currently
        let sum = 0;
        while (count-- > 0)
        {
              
            // Dequeue an node from queue
            let temp = q.shift();
  
            // Add this node's value
            // to current sum.
            sum = sum + temp.data;
  
            // Enqueue left and right children
            // of dequeued node
            if (temp.left != null)
                q.push(temp.left);
            if (temp.right != null)
                q.push(temp.right);
        }
  
        // Update the maximum node
        // count value
        result = Math.max(sum, result);
    }
    return result;
}
 
 
// Driver code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);

 
document.write("Maximum level sum is " + maxLevelSum(root));


//Que - 10 Print the nodes at odd levels of a tree=========================================

class Node
{
    constructor(data) {
       this.left = null;
       this.right = null;
       this.data = data;
    }
}

function printOddNodes(root, isOdd)
{
    // If empty tree
    if (root == null)
    return;

    // If current node is of odd level
    if (isOdd == true)
    document.write(root.data + " ");

    // Recur for children with isOdd
    // switched.
    printOddNodes(root.left, !isOdd);
    printOddNodes(root.right, !isOdd);
}

// Utility method to create a node
function newNode(data)
{
    let node = new Node(data);
    return (node);
}

let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
printOddNodes(root, true);