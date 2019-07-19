const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'
    return string.repeat(num);
}

module.exports = repeatString