
//*#2 Create an object (with keys and values) called person with the following data:
console.log(`#2 Object with keys and values`)
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

//*#3 Create a function that logs out the keys of the object using Object.keys().
console.log(`#3 Use Object.keys to log out keys of object`)
const personKey = Object.keys(person);
console.log(personKey);


//*#4 Create a function that logs out the keys and values of the object using Object.entries().
console.log(`#4 Use Object.entries to log out keys and values of object`)

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
console.log(Object.keys(person));

//*#5 Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
console.log(`#5 Create array that contains multiple people objects`)

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

//*#6 Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
console.log(`#6 Use for and if loop print odd number birthDate `)
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

//*#7 Use .map() to map over the arrayOfPersons and console.log() their information.
console.log(`#7 Use .map over array`)
let lastNameArray = actors.map(actorName => actorName.lastName)
console.log(lastNameArray);

//*#8 Use .filter() to filter the persons array and console.log only males in the array.
console.log(`#8 Use .filter to filter gender `)

let FemaleActors = actors.filter(function(element){
    return element.gender == "Female"
  });
  
  console.log(FemaleActors);

//*#9 Create a function that returns true if the value of birthDate is before Jan 1, 1990.
console.log(`#9 Function that returns true if birthDate is before January 1, 1990`)
const bornBefore = (array, date) => {
    let beforeDate = (date.slice(-4))
    for (let person of array) {
        let birthYear = (person.birthDate.slice(-4))
        if(birthYear < beforeDate) {
            console.log(`${person.firstName} born in ${birthYear}, which is  ${date}`)
            // return true
        }
    }
}

bornBefore(actors, 'True')

//*#10 Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
console.log(`#10 Use .filter to filter array and log people born before January 1, 1990`)
const beforeDate = actors.filter(person => (person.birthDate.slice(-4)) < 1990)
console.log(beforeDate);

//*#1 Use a do...while loop to console.log the numbers from 1 to 1000.
console.log(`#1 print out 1-1000`)
let n = 1;
const upToN = 999;
do {
    console.log(n);
    n++;
} while (n <= upToN);
console.log(n);


// !BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// !BONUS - .filter() out the people in the array who are younger than 21.