// /Use a do...while loop to console.log the numbers from 1 to 1000.
let n = 1;
const upToN = 999;
do {
    console.log(n);
    n++;
} while (n <= upToN);
console.log(n);

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"
const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
};
console.log(person);
// !console.log(Object.keys(person)); 

// Create a function that logs out the keys of the object using Object.keys().
const personKey = Object.keys(person);
console.log(personKey);


// Create a function that logs out the keys and values of the object using Object.entries().
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
console.log(Object.keys(person));

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const actors = [{
        firstName: 'Ryan',
        lastName: 'Ryenolds',
        birthDate: 'October 23, 1976',
        gender: 'Male'
    },
    {
        firstName: 'Shannyn',
        lastName: 'Sossamon',
        birthDate: 'October 3, 1978',
        gender: 'Female'
    },
    {
        firstName: 'Anna',
        lastName: 'Kendrick',
        birthDate: 'August 9, 1985',
        gender: 'Female'
    },
    {
        firstName: 'Sandra',
        lastName: 'Bullock',
        birthDate: 'July 26, 1964',
        gender: 'Female'
    },
    {
        firstName: 'Antonio',
        lastName: 'Banderas',
        birthDate: 'August 10, 1960',
        gender: 'Male'
    },
    {
        firstName: 'Emma',
        lastName: 'Watson',
        birthDate: 'April 15, 1990',
        gender: 'Female'
    },
];
console.log(actors);

// Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.

// an array of objects
// loop through and get the birthDate

// for (const [key, value] of Object.entries(person))
for (const element of actors) {
    // parseint will return the number from .slice method (string)
    // if key is birthdate , put value in let variable
    // slice or substr out the last 4 chars (year)
    // convert to a number
    //&& last 4 digits parseInt(value)
    let oddBirth = parseInt(element.birthDate.slice(-4))
    // check if % == 1 or 0
    if (oddBirth % 2 == 1) {
        console.log(oddBirth)
        // console.log(value);
    }
}

// Use .map() to map over the arrayOfPersons and console.log() their information.

let lastNameArray = actors.map(actorName => actorName.lastName)
console.log(lastNameArray)

// Use .filter() to filter the persons array and console.log 0only males in the array.

// !shorthand
let maleActors = actors.filter(actorGender.gender == "Male");
console.log(maleActors);

// ! long version
// *let maleActors = actors.filter(actorGender => {
// *   return actorGender.gender === 'Male'
// *});
// *console.log(maleActors);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const bornBefore = (array) => {

    let year = parseInt(element.birthDate.slice(-4));
    if (year < 1990) {
        console.log("Born Before January 1, 1990 " + year, "Yes");
        return true;
    } else {
        console.log("Born Before January 1, 1990 " + year, "No");
        return false;
    }
}

bornBefore(actors)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const beforeDate = actors.filter(person => (person.birthDate.slice(-4)) < 1990)
console.log(beforeDate)


// !BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// !BONUS - .filter() out the people in the array who are younger than 21.