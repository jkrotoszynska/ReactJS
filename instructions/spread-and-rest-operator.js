// SPREAD
// lists
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]

console.log(newNumbers)

// objects
const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);


// REST
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));