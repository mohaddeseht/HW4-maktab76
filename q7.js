function currentDate(sp) {
    let today = new Date();
    let d = today.getDay();
    let m = today.getMonth() + 1;
    let y = today.getFullYear();
    return (m + sp + d + sp + y);
}
console.log(currentDate("/"));
console.log(currentDate("-"));