function removeStr(str, search) {
    let index = str.indexOf(search);
    if (index === -1)
        return str;
    else
        return str.slice(0, index) + str.slice(index + search.length + 1);
}
console.log(removeStr("The quick brown fox jumps over the lazy dog", 'the'));