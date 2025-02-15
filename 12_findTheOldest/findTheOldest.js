const findTheOldest = function(array) {
    
    array.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    })

    array.sort((a, b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        
        return bAge - aAge;
    });

    return array[0];

};

// Do not edit below this line
module.exports = findTheOldest;
