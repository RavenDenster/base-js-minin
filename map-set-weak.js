const obj = {
    name: 'Oleg',
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Oleg'], // ключ и значение
    ['age', 26],
    ['job', 'Fullstack'],
]

console.log(Object.entries(obj)); // объект в массив
console.log(Object.fromEntries(entries));

const map = new Map(entries) // подобный синтаксис назывется конструктор класс. В данном случаем map

console.log(map); // map это усложнённый объект

console.log(map.get('job')); // в обычном объекте мы получаем через точку, а в map нужен метод get

map  // в map ключём может быть всё что угодно
    .set('newField', 42)
    .set(obj, "Value of object")
    .set(NaN, 'Nan ??')

console.log(map);
console.log(map.get(obj));
console.log(map.get(NaN));

map.delete('job'); 
console.log(map.has('job'));

console.log(map.size);

// map.clear();
// console.log(map.size);

// ================

for( let [key, value] of map.entries()){ // здесь entries возвращает значение карты в массиве/ но можно этот метод и не писать т.к. он вызывается по умолчанию
    console.log(key, value); // мы в переменую получаем каждую строку, которая шаблонно повторяет сам массив
}

for(let val of map.values()) {
    console.log(val);
}

for(let key of map.keys()) {
    console.log(key);
}

map.forEach((val, key, m) => {
    console.log(key, val); // мы получаем ту же итеррацию, но сдругим синтаксисом
})

// ========================

const array = [...map] // быстрый способ сделать из карты массив // можно записать Array.from(map)
console.log(array);

const mapObj = Object.fromEntries(map.entries())
console.log(mapObj);

// =======================


const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map()

visits
.set(users[0], new Date())
.set(users[1], new Date(new Date().getTime() + 1000 * 60))
.set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]));

// =================
// Set

const set = new Set([1,2,2,3,3,5,5,6,]) // отличие set в том, что он хранит значения в единственном экземпляре

console.log(set);

set.add(10).add(20).add(30).add(20)

console.log(set);
console.log(set.has(30));
console.log(set.size);
console.log(set.delete(1));
console.log(set.size);

// set.clear()
// console.log(set.size);

console.log(set.values());
console.log(set.keys()); // set более простая структура данных чем map, а values and keys нужно для совместимости с map и из одного делать другое

for(let key of set) {
    console.log(key);
}

// ================

function uniqValues (array) {
    return [...new Set(array)] // спрет предращает set в строку/ можно заменить на Array.from(new Set(array))
}

console.log(uniqValues([1,2,2,2,2,2,2,2,3,4,4,5,5,6,6]));

// ==================== ******
// weakmap (он нужен для предотвращения утечек данных) тоесть когда мы удаляем ключ а его значение остаётся мусором

// в weakmap ключами могут быть только объекты

weapObj = {name: 'dff'}

const weapMap = new WeakMap([
    [weapObj, 'obj data']
])

weapObj = null

console.log(weapMap); // из-за особой реализации удаления нельзя вычислить size

// =======================

const cache = new WeakMap()

function cacheuser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now()) // !!! в weak долже быть только объект как ключ, никаккого 'строка'
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheuser(lena)
cacheuser(alex)

lena = null

console.log(cache.has(lena));
console.log(cache.has(alex));

// weakset

const usersWeak = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'irina'},
]

const visit = new WeakSet()

visit.add(usersWeak[0]).add(usersWeak[1])

usersWeak.splice(1, 1)

console.log(visit.has(usersWeak[0]));
console.log(visit.has(usersWeak[1]));