const person2 = {
    name: 'Oleg',
    birthYear: 2005,
}

for (let key in person2) {
    console.log(key);
}

const person = Object.create(
    {
        calculateAge() {
            console.log('Age:',  new Date().getFullYear() - this.birthYear);
        }
    },
    {
        name: {
            value: 'Raven',
            enumerable: true, // возможность иттирировать
            writable: true, // возможность изменять
            configurable: true, // возможность удалять
        },
        birthYear: {
            value: 1993,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() { // в гетторе мы должны вернуть новое значение любым спобобом / также является содержанием строки в объекте
                return new Date().getFullYear() - this.birthYear
            },
            set(color) {
                document.body.style.background = "black"
                console.log('Set age', color);
            }
        }
    }
)

person.name = 'Oleg'

for (let key in person) {
    if(person.hasOwnProperty(key)){ // эта проверка нужна чтобы цикл не трогал прототипы. Рекомендуется использовать всегда в цикле for in
        console.log(key, person[key]); // key это название поля
    }
}
