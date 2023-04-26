const citesRussia = ['Москва', 'Санкт-петербург', 'Казань', 'Новосибирск'];
const citesEurope = ['Берлин', 'Прага', 'Париж'];

//const citiesRussiaWithPopulation =  {...}
//const citiesEuropeWithPopulation = {...}

console.log(...citesRussia);

const allCities = [...citesEurope, ...citesRussia, 'Вашингтон']
console.log(allCities);

const allCitiesConcat = citesEurope.concat(citesRussia);
console.log(allCitiesConcat);


const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3,
}

const citiesEuropeWithPopulation = {
    Moscow: 26, // если два одинаковых то применяетс япоследнее указаное
    Berlin: 10,
    Praha: 3,
    Paris: 2,
}

console.log({...citiesRussiaWithPopulation});
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}); // просто из двух объектов мы получаем один


const numbers = [5, 37, 42, 17]
console.log(Math.max(...numbers));

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(nodes);

// Rest - собирает оставщиеся аргументы в массив

function sum(a, b, ...rest){
    console.log(rest);
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const number = [1, 2, 3, 4, 5]

console.log(sum(...number));



// const a = number[0]
// const b = number[1]

const [a, b, ...other] = number
console.log(a, b, other);


const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russian',
}

const {name, age, ...address} = person

console.log(name, age, address);