let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function iterableSearch(arr, x) {
  let start = 0, end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {

    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;

    // Else look in left or right half accordingly
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return false;
}

const result = iterableSearch(arr, 18)
console.log('-------', result)

function recursiveFunction(arr, x, start, end) {

  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x)
    return recursiveFunction(arr, x, start, mid - 1);
  else

    // If element at mid is smaller than x,
    // search in the right half of mid
    return recursiveFunction(arr, x, mid + 1, end);
}

// Driver code
let arr1 = [1, 3, 5, 7, 8, 9];
let x = 5;
let result1 = recursiveFunction(arr1, x, 0, arr.length - 1)
console.log('------', result1)