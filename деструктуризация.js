function calcValues(a,b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b,
    ]
}

const [sum, sub = "Вычитания нет", mult, ...other] = calcValues(42, 10); // название соответсвует индексу

// const sum = result[0]
// const sub = result[1]

//const [sum, sub] = result
 
console.log(sum, mult, other, sub)

// Objects

const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russian',
        city: 'Moscow',
    }
}

// const name = person.name
const {
    name: firstName, 
    age, 
    car = 'Машины нет',
    address: {city: homeTown, country},
} = person // переименновать поле можно через двоеточие и новое имя

console.log(firstName, age, car, homeTown, country);

const {name, ...info} = person
console.log(name, info); 



// function logPerson(per) {
//     console.log(per.name + ' ' + per.age);
// }
// logPerson(person)

function logPerson({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age);
}
logPerson(person)