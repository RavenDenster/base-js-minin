console.log('Request data...');

// setTimeout(() => {
//     console.log('Prepating data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recieved', backendData);
//     }, 2000)
// }, 2000)
// промесы это обёртка для асинхраности. и обращения последовательно через then
// callback это функция, которая должна быть выполнины после заверщения другой функции в очереди
const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Prepating data...');

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})
    .then(data => {
        return new Promise((resolve, reject) => { // чтобы пошла цепочка к следующему then нужно вернуть функцию
            setTimeout(() => {
                data.modified = true
                resolve(data)
            }, 2000)
        })
    })
    .then(clientData => {
        console.log('Data received', clientData);
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Modified', data);
    })  // подобная цепочка then называется чейнить от слова chain
    .catch(err => console.error('Error:', err))
    .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

sleep(2000).then(() => console.log('After 2 sec'));
sleep(3000).then(() => console.log('After 3 sec'));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises'); // выполняет, когда всё было выполнено
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises'); // выполняет, когда был выполнен первый элемент
})





