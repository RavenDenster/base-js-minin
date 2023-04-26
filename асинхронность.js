console.log('Start');
 
function timeout2sec(){
    console.log('timeout2sec');
}

window.setTimeout(function() {
    console.log('Inside timeout, after 5000 second');
}, 5000) // setTimeout не из js. Он пришёл из браузерного api

setTimeout(timeout2sec, 2000)

console.log('End');