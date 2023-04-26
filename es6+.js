//variable

var num = 42

num = `str`

console.log(num);

let a = 24

if (true) {
    let a = 42

    console.log(a);
}

console.log(a);

// Hoisting

b = 20 // когда js не видет переменной он возвращается и ищет ёё занова

console.log(b);

var b = 10



function hoisted() {
    age = 26
}

let age
hoisted()
console.log(age); // в функие это правило не  работает так как функция обращается к выше стоящему скоупу тоесть всему коду

// const

const color = '#ffeebb'
//color = '#333'

console.log(color);

const array = [1,2,4,5,8] // константа запрещает педать переосвоение, но не менять начинку

console.log(array);

array.push(13)

console.log(array);

const obj = {a: 42}
obj.name = 'Igor'

console.log(obj);


// arrow-function

// function sum(a, b) {
//     return a + b
// }

const sum = (a, b) => {
    return a + b
}

const cube = a => a ** 3  // если функия написана в одну строчку и не имеет скобок, то js автоматичски возвращает данное значение 

console.log(sum(41, 1))
console.log(cube(2))

setTimeout(() => console.log('After 1 sec'), 1000)

function log() {
    console.log(this) 
}

const arrowLog = () => console.log(this) // у стрлочной функии нет своего контекста, в отличие от обычной где это происходит через ключевое слово function

const person = {
    name: 'Elena',
    age: 20,
    log: log, // при данном синтаксисе функиция создаёт свой собственный контекст, который указывает на функици. в контексте которой она былоа вызвана, тоесть объекта
    arrowLog: arrowLog,
    delayLog: function() {
        setTimeout(() => { // c обычной функией работать не будет т.к контекст settimeout указывает на window
            console.log(this.name + ' ' + this.age)
        }, 2000)
    }
}

person.delayLog()

// default-params

const defaultB = 30
const getDefault = c => c * 2

function compute(a = 10, b = defaultB, c = getDefault(10), d = getDefault(a)) {
    return a + b + c + d
}

console.log(compute(20));

// string

const title = `Hello`
const isVisible = () => Math.random() > 0.5

const template = `
    ${isVisible() ? `<p>Visible</p>` : ''}
    <h1 style = "color: red;" >${title}</h1>
    `
console.log(template);

const str = ` Hello`

console.log(str.startsWith(' He'))
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))
console.log(str.endsWith('l'))

console.log(str.includes('ll'))
console.log(str.repeat(5));

console.log(str.trim()) // удаляет пробелы в начале и в конце
console.log(str.trimEnd())
console.log(str.trimStart())

console.log(str.padStart(10)) // можно добавить способ наполнения
console.log(str.padEnd(9, 'abc'))

// rest and spreat

function average(a, ...args) {
    console.log(args);
    return args.reduce((acc, i) => acc += i, 0) / args.length
}

console.log(average(5, 5, 3, 4, 2, 4, 5))

const arrayMax = [1, 2, 3, 5, 8, 13]

console.log(Math.max(...array))
console.log(Math.min(...array))
//console.log(Math.max.apply(null, array));

const fib = [1, 1, ...array]
console.log(fib);

// destructuring

const [q, w = 42, ...e] = array
console.log(q, w, e)

const address = {
    country: 'Russia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function() {
        return `${this.country} ${this.city} ${this.street}`
    }
}

const {city, country, street, concat: adressConcat} = address

console.log(adressConcat.call(address)) // call потому что функция в переменную у нас забираются без контекста

const {city: town, ...rest} = address
console.log(town)
console.log(rest)

const newAddress = {...address, street: 'Tverskava', code: 123}
console.log(newAddress);

// object

const cityField = 'city' // это нужно для создания динамики ключей для объекта

const job = 'Fullstack'

const person2 = {
    age: 26, 
    name:'Irina',
    job, // елси ключ и значение совпадает, то можно просто избавиться ио значения 
    [cityField + Date.now()]: 'Saint-Peterburg',
    'country-live': 'Russia',
    print: () => 'Person', // не работает с контекстом 
    toString() { // toString: function()
        return Object
        .keys(this) // keys нам возващает массив ключей
        .filter(key => key !== 'toString')
        .map(key => this[key])
        .join(' ')
    }
}

console.log(person2.toString())
console.log(person2)

// methods

const first = {a: 1}
const second = {b: 2}

console.log(Object.is(20, 20)) // проверка на эквювалентность
const obje = Object.assign( {}, first, second, {
    c: 3,
    d: 4,
}) // assign меняет существующий объект, чтобы он этого не делал нужно в переди оставить пустой объект

console.log(obje)
console.log(first)

console.log(Object.entries(obje)) // оbject по факту говорит о том, что будет брать пустой объект
console.log(Object.keys(obje))
console.log(Object.values(obje))



//! импорт и экспорт. В js раждый файл это отдельный не связанным модуль

// 1

const privateVariable = 42

//export const colors = '#11111'

//export function compute(a, b){
//    return a + b
//}

//export default{
//    log() {
//        console.log(privateVariable);
//    }
//}

//! 2 это прототипы




// class

