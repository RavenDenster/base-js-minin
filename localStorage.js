const myNumber = 42

localStorage.removeItem('number')
console.log(localStorage.getItem('number'))
    // первое значение это ключ по которому сохранить, второе это само значение
localStorage.setItem('number', myNumber) // автоматически вызывается метод toSring() и localStorage может работать только со строками
console.log(localStorage.getItem('number'))
//localStorage.clear() //удаляет всё

const object = {
    name: "Raven",
    age: 20,
}

localStorage.setItem('person', JSON.stringify(object)) // json это глобальный объект, который работает с джейсонами и объектами / у него есть два метода stringify, parse

const raw = localStorage.getItem('person')

raw.name = 'Oleg'
console.log(raw.age); // получая данные из localStorage у нас нет доступа до просто ключей

console.log(typeof raw);



const person = JSON.parse(raw)

person.name = 'Oleg'

console.log(person);

// =====================

window.addEventListener('storage', (e) => { // для синхранизации вкладок / данное событие вызывается тогда, когда вызывается localStorage
    console.log(e); // в текущей вкладке будет underfind т.к. это событие вызывается в другой вкладке того же самого домена, но запись в localStorage доступна во всех вкладка принадлежащих этому домену
})