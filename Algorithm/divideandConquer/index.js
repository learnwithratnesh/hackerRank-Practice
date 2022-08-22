function commonPrefixUtil(str1, str2) {
  let result = "";
  let n1 = str1.length,
    n2 = str2.length;

  for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
    if (str1[i] != str2[j]) {
      break;
    }
    result += str1[i];
  }
  return result;
}

function commonPrefix(arr, low, high) {
  if (low == high) {
    return arr[low];
  }

  if (high > low) {
    // Same as (low + high)/2, but avoids
    // overflow for large low and high
    let mid = low + Math.floor((high - low) / 2);

    let str1 = commonPrefix(arr, low, mid);
    let str2 = commonPrefix(arr, mid + 1, high);

    return commonPrefixUtil(str1, str2);
  }
  return null;
}

// Driver code
let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
document.write("The longest common prefix is " + arr);
let n = arr.length;
let ans = commonPrefix(arr, 0, n - 1);

if (ans.length != 0) {
  document.write("The longest common prefix is " + ans);
} else {
  document.write("There is no common prefix");
}
