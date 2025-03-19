function getThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

function getSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b);
    console.log("Array After sorting:")
    console.log(arr);
    return [arr[arr.length - 2], arr[1]];
}

let arr = [];
for (let i = 0; i < 10; i++)
    arr.push(getThreeDigitRandomNumber());

console.log(arr);

let result = getSecondLargestAndSmallestSorted(arr);
console.log("Second Largest: " + result[0]);
console.log("Second Smallest: " + result[1]);