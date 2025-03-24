const getAge = function(birth, death) {
    if (!death) {
        const current = new Date().getFullYear();
        return current - birth
    } else {
        return death - birth
    }
}

const findTheOldest = function(people) {
    // people contains name, yearOfBirth, yearOfDeath

    // get peoples ages
    const peopleWithAge = people.map(person => ({
        ...person, age: getAge(person.yearOfBirth, person.yearOfDeath)}))
    
    // sort array
    const peopleWithAge_sorted = peopleWithAge.sort((personA, personB) => 
    personA.age < personB.age ? 1 : -1)
    
    // return name of the oldests
    return peopleWithAge_sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
