// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal { 

    static type = 'ANIMAL' // статические переменные пренадлежат только классу их нельзя вызвать будущими классами

    constructor(options) { // options это объект в котором перечислены доступные поля через options. и преравнены к будущим созданным объектам через this
        //console.log(options);
        this.name = options.name // словом this мы инициолизируем поля для новых объектов, а options, которые евзяется объетом для все образующих объектов, ссылается на конструктор
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() { // этот класс поподает в прототип будущего объекта и соответсвенно мы можем реализовывать свои методы
        console.log('I am Animal!');
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

class Cat extends Animal {
    static type = "CAT"

    constructor(options){
        super(options) // чтобы наследоваться мы для начала должны вызвать родительский конструктор через метод super
        this.color = options.color
    }
    
    voice() {
        super.voice() // здесь super оброщается к родительским классам
        console.log('I am cat');
    }

    get ageInfo() { // помним, что геттор это поле, и мы его так и вызываем
        return this.age * 7
    }

    set ageInfo(newAge) { // в сетторе мы меняем поле, а в гетторе мы обращаемся
        this.age = newAge
    } // у нас одно название функции и для геттера и сеттера и когда мы пишем cat.ageInfo = n это вызов сеттера и зменение поля(как прописанов в самом сетере), а просто cat.ageInfo это обрашение к уже изменёнуму полю
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black',
})



class Component{
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = "none"
    }

    show() {
        this.$el.style.display = "block"
    }

}

class Box extends Component {
    constructor(options){
        super(options.selector)// возможно селектор это какоето специальное значение для this.$el 2 объяснение - мы дожны передать не select, как таковой а this.$el / если я буду передовать только селектор, то хранится в объекте и ничего не вывидится
        
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
        this.$el.style.marginTop = options.marginTop
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue',
    marginTop: '15px',
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green',
    marginTop: '15px',
})