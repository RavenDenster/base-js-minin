const person = {
    name: 'Pider',
    age: 13,
    greet: function () {
        console.log('Great!');

    }
}

const unperson = new Object({
    name: 'Parker',
    age: 50,
    greet: function () {
        console.log('Great!');

    }
})
//  прототипы это определённый объект, который присутствует у родительских элементов и с помощью его мы можем наследоваться и иметь доступ к расширенным функциям, но бывают и обычные строки

Object.prototype.sayHello = function () { // с помощью prototype мы создаём новые поля, которые чаще всего являются функциями
    console.log('Hello!');
}


const lena = Object.create(person); // create передаёт объект, который будет являться прототипом для объекта лена и будет находится на втором уровне, и эти значения будут вызываться, если нету основных
lena.name = 'Elena';

const str = 'I am string';

const strObj = new String('I am string'); // всё в js является объектами и у строки есть ещё один над класс string

// object главный класс и всё от него идёт 






import logger,{colors, compute} from './es6+'
import * as Module from './es6+'

compute(1, 2)
logger.log() // можно использовать любое имя но не рекомендуетс

Module.default.log()

