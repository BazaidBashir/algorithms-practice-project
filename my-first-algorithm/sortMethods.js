
//--------------------------------Question--------------------------------//

// Implement bubble sort algorithm in javaScript.

//--------------------------------Answer----------------------------------//

// -------sort given arrays using bubble sort algorithm----------
const arr1 = [5, 3, 8, 2, 1];
const arr2 = [64, 34, 25, 12, 22, 11, 90];
const arr3 = [38, 27, 43, 3, 9, 82, 10];
const arr4 = [12, 11, 13, 5, 6];    


function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example:
console.log(bubbleSort(arr1)); // Output: [1, 2, 3, 5, 8]
console.log(bubbleSort(arr2)); // Output: [11, 12, 22, 25, 34, 64, 90]
console.log(bubbleSort(arr3)); // Output: [3, 9, 10, 27, 38, 43, 82]
console.log(bubbleSort(arr4)); // Output: [5, 6, 11, 12, 13]



// -------sort given arrays using selection sort algorithm----------

const array1 = [64, 25, 12, 22, 11];   
const array2 = [29, 10, 14, 37, 13];
const array3 = [5, 3, 8, 6, 2];
const array4 = [20, 12, 10, 15, 30];

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;  
            }
        }

        // swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// Example:
console.log(selectionSort(array1)); // Output: [11, 12, 22, 25, 64]
console.log(selectionSort(array2)); // Output: [10, 13, 14, 29, 37]
console.log(selectionSort(array3)); // Output: [2, 3, 5, 6, 8]
console.log(selectionSort(array4)); // Output: [10, 12, 15, 20, 30]


