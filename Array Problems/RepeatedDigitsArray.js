function getRepeatedDigits(rangeStart, rangeEnd) {
    let arr = [];

    for (let num = rangeStart; num < rangeEnd; num++) {
        let strNum = num.toString();
        if (strNum.length === 2 && strNum[0] === strNum[1]) 
            arr.push(num);
    }

    return arr;
}

let result = getRepeatedDigits(0, 100);
console.log("Digits that are repeated twice:", result);