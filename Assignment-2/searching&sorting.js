// 1. Implement Binary Search
console.log("ANSWER 1")

let arr = [1, 2, 3, 4, 5, 6, 7];
let key =3

function binarySearch() {
  let start = 0,
      end=arr.length-1

 while(start <= end) {
    let mid = Math.floor((start + end) / 2);
   if (arr[mid] === key) {
    return "Found";
  }else if  (arr[mid] < key){
    start = mid+1
  }else{
    end =mid-1
  }
   
  }

 return "Not Found"
}
console.log(binarySearch())



///////////////////////////////////////////////////////////

// 2. Implement Merge Sort
console.log("ANSWER 2")
function mergeSort(arr) {
 
  if (arr.length <= 1) {
    return arr;
  }

  
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);


  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

 
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  const mergedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      mergedArr.push(leftArr.shift());
    } else {
      mergedArr.push(rightArr.shift());
    }
  }


  mergedArr.push(...leftArr, ...rightArr);

  return mergedArr;
}
const arr1 = [4, 2, 7, 1, 3, 6];
const sortedArr = mergeSort(arr1);
console.log(sortedArr); 

//////////////////////////////////////////////////////////

// 3. Implement Quick Sort
console.log("ANSWER 3")

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr2 = [3, 7, 2, 9, 1, 8, 4, 6];
const sortedArr2 = quickSort(arr2);
console.log(sortedArr2); 


//////////////////////////////////////////////////////////

// 4. Implement Insertion Sort
console.log("ANSWER 4")

let arr3=[5,8,9,4,6]

function insertionSort(){
  for( let i = 1; i< arr3.length; i++){
    let key= arr3[i]
    let j = i-1;
    
    while(j>= 0 && arr3[j]> key){
      arr3[j+1]= arr3[j]
      j--;
    }
    arr3[j+1]= key;
  }
}
insertionSort();
console.log(arr3)


////////////////////////////////////////////////////////////

// 5. Write a program to sort list of strings (similar to that of dictionary)
console.log("ANSWER 5")

var string = prompt("Please enter a string");
var stringArray=string.split(' ');
stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(stringArray.join(' '));
