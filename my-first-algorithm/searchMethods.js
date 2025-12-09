


// ------------------------ Question -------------------------

// Implement linear search and binary search algorithms in javaScript.

// ------------------------ Answer ---------------------------

// find the index of target in arr using linear search

function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] === target) {
            return i;
        }
    }
    return -1; // not found
}
// Example:
console.log(linearSearch([3, 5, 6, 9, 7], 9));
console.log(linearSearch([3, 5, 7, 9, 11],11));
console.log(linearSearch([32, 25, 36, 59, 47], 59));
console.log(linearSearch([3, 1, 2, 4 ,7, 5, 6, 9, 8], 5));



// find the index of target in arr using binary search

function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === undefined)
            break; // skip undefined
        if (arr[mid] === target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1; // not found
}
// Example:
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15 ], 5));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15 ], 9));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15 ], 15));