function outerCompute() {
    y = 4;
    function compute(x) {
        if (y > 1) {
            return x * compute(x, y--);
        }
        else return x;
    }
    return compute;
}
let result = outerCompute();
console.log(result(8));


/*
y = 4
x = 8
8**4 = 8 * 8**3
8**3 = 8 * 8**2
8**2 = 8* 8
8**1=8
*/