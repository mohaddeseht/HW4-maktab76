function remove(arr) {
    let tempArray = [];
    for (let x in arr) {
        if (Boolean(arr[x]) === true)
            tempArray.push(arr[x]);
    }
    return tempArray;
}
console.log(remove([null, 5, "", 8, false, 0, "hello"]));



