function getThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

function getSecondLargestAndSmallest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    let smallest = arr[0];
    let secondSmallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) 
            secondLargest = arr[i];
    
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) 
            secondSmallest = arr[i];
    }
    return [secondLargest, secondSmallest];
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(getThreeDigitRandomNumber());
}
console.log(arr);

let result = getSecondLargestAndSmallest(arr);
console.log("Second Largest: " + result[0]);
console.log("Second Smallest: " + result[1]);