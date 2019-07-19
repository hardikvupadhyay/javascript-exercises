function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function sum(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0);
}

function multiply(arr) {
    return arr.reduce((mul, curr) => mul * curr, 1);

}

function power(a, b) {
    mul = 1;
    for (let i = 0; i < b; i++) {
        mul *= a;
    }
    return mul;
}

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}