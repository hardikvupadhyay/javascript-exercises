const caesar = function(string, num) {

    var shiftedString = string.split("").map(function(ch) {
        var charCode = ch.charCodeAt(0);
        var codeset = (code) => (code < 97) ? 65 : 97;
        var mod = (n, m) => (n % m + m) % m;
        if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
            var shiftedCharCode = (mod(charCode - codeset(charCode) + num, 26)) + codeset(charCode);
            return String.fromCharCode(shiftedCharCode);
        }
        return ch;
    }).join("");

    return shiftedString;
}

module.exports = caesar