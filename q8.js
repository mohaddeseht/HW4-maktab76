function month(today) {
    monthArr =
        ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
    return monthArr[today.getMonth()];
}
console.log(month(new Date("10/11/2009")));