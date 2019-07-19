let findTheOldest = function(persons) {
    var currentYear = (new Date()).getFullYear();
    var personOrder = persons.sort(function(person1, person2) {
        var age1 = ((person1.yearOfDeath) ? person1.yearOfDeath : currentYear) - person1.yearOfBirth;
        var age2 = ((person2.yearOfDeath) ? person2.yearOfDeath : currentYear) - person2.yearOfBirth;
        return age1 > age2 ? -1 : 1;
    })
    return personOrder[0];
}

module.exports = findTheOldest