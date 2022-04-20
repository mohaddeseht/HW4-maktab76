const numbers = [15.5, 2.3, 1.1, 4.7];
function sumUp(num) {
    let sum = num.reduce((acc, current) => {
        return acc + current;
    })
    return Math.round(sum);
}
console.log(sumUp(numbers));