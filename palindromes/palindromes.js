const palindromes = function(string) {
    var processedString = string.toLowerCase().replace(/[^a-zA-Z]/g, "");
    console.log(processedString);
    return processedString.split("").reverse().join("") == processedString;
}

module.exports = palindromes