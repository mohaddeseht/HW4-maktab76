let array = [1, 2, 3, 4, 5, 6];
function sumUp(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}
console.log(sumUp(array));