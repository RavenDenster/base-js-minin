const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

//delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos() {
//    return delay(2000).then(() => fetch(url))
//     .then(response => response.json()) // json нужен для переформатирования
// }
// fetchTodos()
// .then(data => {
//     console.log('Data:', data)
// })
// .catch(e => console.error(e)
// )

async function fetchAsyncTodos() {// если в функции используется await то перед функией следует написать async. Грубо говоря async даёт сигнал, что надо всё переворматировать в промесы
    console.log('Fetch todo started...');
    await delay(2000) // await разносильно обработки промеса тобишь then
    const response = await fetch(url) // поскольку нам fetch возвращает response нам нужно получить его в переменную как результат работы промиса и fetch
    const data = await response.json()
    console.log('Data:', data);
}

fetchAsyncTodos();