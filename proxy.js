//Object

const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack',
}

const op = new Proxy(person, {
    get(target, prop) { // gee, set, это всё ловушки
        console.log(`getting prop ${prop}`);
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p]) // через for in преобразуется target[p] в op.age (к примеру)
                .join(" ")
        }
        return target[prop] // target это весь объект, prop отдельные поля
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in targer`)
        }
    },
    has(target, prop) { // это метод возвращает true или false, существует ли такое поле в объекте
        return ['age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true
    }
})

//Function

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) { // target сама функция, thisArg - это контекст если его передовали при помощи call или bind, args это все параметры, которые передаём в функцию (text)
        console.log('Calling fn...');
        console.log(args);
        return target.apply(thisArg, args).toUpperCase()
    } // apply для отслеживания вызова функции
})

// Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        //console.log('Construct...')

        return new Proxy(new target(...args), { // args это наши параметры
            get(t, prop) {
                console.log(`Getting prop "${prop}"`);
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30)



// Wrapper

const withDefaultValue = (target, defaulBalue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaulBalue) // obg[prop] это означает возвращение значения оbj по ключу prop
    })
}

const position = withDefaultValue( // здесь передаём параметры
    {
        x: 24,
        y: 42,
    }, // этот объект и есть на target
    0
)
console.log(position);

// Hidden properies

const withhiddenProps = (target, prefix = "_") => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),  // prop - это названия свойства
        ownKeys: obj => Reflect.ownKeys(obj) //reflect нужен для более детальной работы с ключами
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)   // ресивер это по сути сам объект или прокси
    })
}

const data = withhiddenProps({// здесь передаём параметры
    name: 'Vladilen',
    age: 25,
    _uid: '12121212'
})

// Optimization


const IndexArray = new Proxy(Array, {
    construct(target, [args]) { // args это и есть наш массив
        const index = {} // index имеет карту всего массива по id
        args.forEach(item => index[item.id] = item) //скобки при перемешение в объект превращается в точки

        return new Proxy(new target(...args), {  // это базовое использование прокси и посути мы здесь ничего не делаем / это результирующий массив
            get(arr, prop) { // мы поставили ловушку для массива
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexArray([
    { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
    { id: 22, name: 'Elena', job: 'Student', age: 22 },
    { id: 33, name: 'Vistor', job: 'Backend', age: 23 },
    { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 },
])