class Human {
    gender = 'female';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Max';
    gender = 'male'

    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printGender();
person.printName();