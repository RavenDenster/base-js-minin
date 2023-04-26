function* strGenerator() {
    yield 'H'
    yield 'E'
    yield 'L'
    yield 'L'
    yield 'O'
}

const str = strGenerator()



function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen()



const iterator = {
    gen(n = 10) {
        let i = 0
        return {
            next() {
                if(i < n){
                    return {value: ++i, done: false}
                }
            return {value: undefined, done:true}
            }
        }
    }
}

const itr = iterator.gen()



for(let k of 'Hello'){ // переменная k будет созваться на каждой итерации/ этот цик работает только с элементами у которых есть родительский класс символ, который также есть и у генераторов, но нет у объектов
    console.log(k);
}



function* iter(n = 10) {// генераторы можно итеерировать через for of так как в нём уже определён символ
    for( let i = 0; i < n; i++) {
        yield i
    }
}

for(let k of iter(6)) {
    console.log(k);
}