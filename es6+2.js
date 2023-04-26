// class

class Person {

    type = 'human'

    constructor(name) {
        this.name = name
    }

    great() {
        console.log(this.name + ' говорит привет!')
    }
}

const max = new Person('Max')

console.log(max, max.great())

class Programmer extends Person {
    constructor(name, job) {
        super(name)

        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        // if(job.length < 2){
        //     throw new Error('Пизда')
        // } else{
        //     this._job = job
        // }
    }

    greet() {
        super.great()
        console.log('Rewritten');
    }
}

const fronted = new Programmer('Max', 'frontend')
console.log(fronted)
fronted.greet()
console.log(fronted.job)
fronted.job = '1'
console.log(fronted.job)

// Static

class Util {
    static average(...args) { // если фукция определена статической то мы может обратиться через класс
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}

// const util = new Util()
//console.log(util.average(2,2,2,2,2,3,5))

const res = Util.average(2, 2, 2, 2, 2, 3, 5)
console.log(res)

// symbols нужен для задания уникального ключа

const symbol = Symbol('demo')
const other = Symbol('demo')

console.log(symbol)
console.log(other)

console.log(symbol === other)

const obj = {
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta'
}

for (let key in obj) {
    console.log(key) // символы не итерируются
}

console.log(obj.demo)
console.log(obj[symbol])



// generators, iterator



const array = [10, 2, 454, 4]
const str = 'Hello'

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

const iter = array[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

for (let item of str) {
    console.log(item);
}// цикл fro of заменяет выше написаный код для тех элементов ге определён символ иттератор

const country = { // кастомная логика итерации
    values: ['ru', 'kz', 'ua', 'by'],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const value = this.values[i]
                i++
                return {
                    done: i > this.values.length,
                    value
                }
            }
        }
    }
}

for (let item of country) {
    console.log(item);
}

// generator

function* gen(num = 4) {
    for (let i = 0; i < num; i++) {
        try {
            yield i
        } catch (e) {
            console.log('Error', e);
        }
    }
}

const iters = gen(3) // итерация вызываются только когда мы вызываем млед метод некс
console.log(iters.next())
console.log(iters.throw('my error'))
console.log(iters.next())
console.log(iters.next())


// promise


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Суссес')
    }, 500)
})

promise.then(data => console.log(data))

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms)
})

delay(1000)
    .then(data => delay(500))
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))



async function asyncDelay() {
    try {
        const data = await delay(2000) // здесь мы сразу получаем значение
        console.log(data) // мы работаем на плоском уровне и у нас нет погружения
    } catch (e) {
        console.log('Error', e)
    } // try and catch это для того, чтобы при указания на 165 стр вместо resolve reject не быподала обычная ошибка 
}

asyncDelay()

Promise.all([
    delay(1000),
    delay(500),
    delay(2000),
]).then(data => console.log(data))

Promise.race([
    delay(1000),
    delay(500),
    delay(2000),
]).then(data => console.log(data))


// map / set

const map = new Map(
    [['a', 1]]
)

console.log(map.get('a'))
map.set('b', 2).set(NaN, 'Number').set(301, 'demo')
console.log(map)
console.log(map.get(NaN))
console.log(map.has(301)) // это именно ключ, не содержание
console.log(map.size)

console.log(map.keys())
console.log(map.entries())
console.log(map.values())

//set

const set = new Set([1, 1, 2, 1, 1, 1, 3, 3, 3, 4, 5])
console.log(set.size)
console.log(set.add(21))
set.delete(5)
console.log(set)


// reflect


class Student {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hi! My nme is ${this.name}`)
    }
}

class ProtoStudent {
    university = 'Oxford'
}

const student = Reflect.construct(Student, ['Igor'],) // третий параметр это прототип для новосозданного объекта

console.log(student.__proto__ === ProtoStudent.prototype)

Reflect.apply(student.greet, { name: 'Tester' }, [])
console.log(Reflect.ownKeys(student)) // это ключи полей

Reflect.preventExtensions(student)

student.age = 25

console.log(Reflect.isExtensible(student))

console.log(student)


// proxy это класс помогающий добавлять ловушки на любые объекты


const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `поля ${prop} в объекте нет`
    },
    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Длина должна быть больше двух символов. Сейчас ' + value.length)
        }
    }
}

const form = {
    login: 'tester',
    password: '12345',
    'username': '1111'
}

const formProxy = new Proxy(form, validator) // отличие от геттеров и сеттеров, что мы можем применять любые объекты

console.log(formProxy['user'])

formProxy.password = '12' // длина есть устрок у чисел нет

console.log(formProxy.password)



function log(message) {
    console.log('[Log]:', message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) { // argArray это массив аргументов
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('Количество аргументов не совпадает')
        }
    }
})

proxy('Custom message') // proxy равнозначен функции лог
proxy('Message', 2)
