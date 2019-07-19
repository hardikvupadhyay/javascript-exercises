const fibonacci = function(n) {
    var num = parseInt(n);
    if (num <= 0) {
        return "OOPS";
    }
    if (num === 1 || num === 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci