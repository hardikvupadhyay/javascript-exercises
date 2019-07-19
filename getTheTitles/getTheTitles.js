const getTheTitles = function(books) {
    var booksArr = Array.from(books);
    var titles = booksArr.map(elem => elem.title);
    return titles;
}

module.exports = getTheTitles;