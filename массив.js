const people = [
    { name: 'Владимер', age: 25, budget: 4000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
]

// for (let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// for (let person of people){
//     console.log(person);
// }

// ForEach

people.forEach(person => { console.log(person); }) // по факту все три варианта делают одно и тоже

// Map - он отличается тем, что создаёт новый массив и мф его можем занаить в новую переменную

const newPeople = people.map(person => {
    return  `${person.name} ${person.age * 3}`
})
console.log(newPeople);

// filter

// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if(people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);

const adults = people.filter(person => {
    if(person.age >= 18){
        return true
    }
})
console.log(adults);

// Reduce

// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount);

const amount = people.reduce((total, person) => {
    return total + person.budget
}, 0)
console.log(amount);

// Find

const igor = people.find(person => person.name === 'Игорь')
console.log(igor);

// FindIndex

const igorIndex = people.findIndex(person => person.name === 'Игорь')
console.log(igorIndex);

//============

const newPeoples = people
    .filter(person => person.budget > 3000) // фильтер возвращает новый массив
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    

console.log(newPeoples);