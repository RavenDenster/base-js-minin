function hello() {
    console.log('Hello', this);
} // this грубо говоря на что ссылается при вызове или, что стоит слево от точки

const person = {
    name: 'Raven',
    age: 20,
    sayHello: hello, 
    sayHelloWindow: hello.bind(window), // bind меняет контекст. Можно вместо window написать this и ничего не изменится
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`); // this указывает на контекст person
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

const lena = {
    name: 'Elena',
    age: '23',
}

person.logInfo.bind(lena, 'Frontend', '8-999-999-99-99')(); // по дэ факту здесь bind просто перед точкой меняет person на lena
person.logInfo.call(lena, 'Frontend', '8-999-999-99-99');
person.logInfo.apply(lena, ['Frontend', '8-999-999-99-99']);

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//    return arr.map( el => {
//         return el * n
//     })
// }

// console.log(multBy(array, 15));

Array.prototype.multBy = function(n) {
    return this.map( el =>{  // this это сам массив, тоесть при вызове, то что слева от нозвания
        return el * n
    })
}

console.log(array.multBy(20));
