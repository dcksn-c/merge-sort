function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const midPoint = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const newArr = [];
    while(leftArr.length > 0 && rightArr.length > 0) {
        if(leftArr[0] < rightArr[0]) {
            newArr.push(leftArr.shift())
        }
        else {
            newArr.push(rightArr.shift())
        }
    }
    return newArr.concat(leftArr.slice(), rightArr.slice());
}

console.log(mergeSort([2,3,1,4]))

/*
arr = [1,2,3,4]
newArr = []
newArr.push(arr.shift())
console.log(newArr)
console.log(arr)
*/