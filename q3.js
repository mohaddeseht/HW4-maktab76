let str = 'the quick brown fox';
function upperCase(str) {
    let arr = str.split('')
    let newArr = [];
    for (let x in arr) {
        newArr.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
    }
    return newArr.join('');
}
console.log(upperCase(str));