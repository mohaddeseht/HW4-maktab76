let str = 'the quick brown fox';
function upperCase(str) {
    let arr = str.split(' ')
    let newArr = [];
    for (let item of arr) {
        newArr.push(item[0].toUpperCase() + item.slice(1));
    }
    return newArr.join(' ');
}
let result = upperCase(str);
console.log(result);
