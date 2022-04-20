let firstArr = [1, 2, 3];
let secondArr = [2, 30, 1];
function mergeArray(firstArr, secondArr) {
    let thirdArray = [...secondArr];
    for (let x in firstArr) {
        if (thirdArray.includes(x) === -1) {
            thirdArray.push(x);
        }
        else continue;
    }
    return thirdArray;
}
console.log(mergeArray(firstArr, secondArr));


// function mergedArray(arr1, arr2) {
//     let mergingArr = arr1
//     .filter((item) => arr2.indexOf(item) === -1)
//     .concat(arr2);
//     return mergingArr;
//     }
//     let firstArr = [1, 2, 3];
//     let secondArr = [2, 30, 1];
//     let holdFunction = mergedArray(firstArr, secondArr);
//     console.log(holdFunction);