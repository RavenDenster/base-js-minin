const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest(method, url) {
    return new Promise((resolve, reject) => { // снабдить функцию функциональность промиса, нужно просто вернуть в не й промис
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.onload = () => {
            if (xhr.status >= 400) { // чтобы предостеречься от мелких ошибок
                reject(xhr.response)
            } else {
                resolve(JSON.parse(xhr.response)); // чтобы превратит строку в объект можно также раньше написать xhr.responseType = 'json'
            }
        }

        xhr.onerror = () => { // в зависимотри всё ли правильно ли нет выполняется или onload или onerror
            reject(xhr.response)
        }

        xhr.send()
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data)) // data это что мы передаём в resolve
    .catch(err => console.log(err))



function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        // xhr.responseType = 'json'
        xhr.setRequestHeader('content-type', 'application/json')   // по умолчанию даже если указать в send stringify отправляется текст и чтобы произошло форматирование в формате json нужхно указать явно

        xhr.onload = () => {
            if (xhr.status >= 400) { // чтобы предостеречься от мелких ошибок
                reject(xhr.response)
            } else {
                resolve(JSON.parse(xhr.response)); // чтобы превратит строку в объект можно также раньше написать xhr.responseType = 'json'
            }
        }

        xhr.onerror = () => { // в зависимотри всё ли правильно ли нет выполняется или onload или onerror
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

const body = {
    name: 'Oleg',
    age: 26
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data)) // data это что мы передаём в resolve
    .catch(err => console.log(err))

// ======================== fetch

function sendRequestFetchGet(method, url) {
    return fetch(url).then(response => { // fetch возвращает промис / responce это то, что в ссылке
        return response.json()
    })
}
sendRequestFetchGet('GET', requestURL)
    .then(data => console.log(data)) // data это что мы возвращаем
    .catch(err => console.log(err))




function sendRequestFetchPost(method, url, body = null) {
    const headers = {
        'content-type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then(response => { // fetch возвращает промис
        if (response.ok){
            return response.json()
        }
        return r12json().then(error => {
            const e = new Error('Something crack')
            e.data = error
            throw e
        })
    })
}

sendRequestFetchPost('POST', requestURL, body)
    .then(data => console.log(data)) // data это что мы возвращаем
    .catch(err => console.log(err))
