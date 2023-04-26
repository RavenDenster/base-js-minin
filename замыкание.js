function createCalcFunction(n) {
    return function() {
        console.log(1000 * n);        
    }
}

createCalcFunction(9)(); // вторая скобка помогает провести конект с вложеной функцией


function createIncrementor(n) {
    return function(num){
        return n + num
    }
}

const addTwo = createIncrementor(2) // функция addOne замкнула значение 2 в себе и постоянное его повторяет
const addTen = createIncrementor(10)

console.log(addTwo(10));
console.log(addTen(100));

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')

console.log(comUrl('google'));


function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function lodPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = { name: 'Елена', age: 19, job: 'SMM'}

bind(person1, lodPerson)()
bind(person2, lodPerson)()