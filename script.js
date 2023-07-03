'use strict';

//a = 5;
//console.log(a);

console.log( 4 / 0);
console.log('Ildar' * 9);

let somthing;
console.log(somthing);

let person = {
    name: 'Ildar',
    age: 39,
    isMarried: true
}

console.log(person['name']);

//alert('Hello World!');

//let answer = confirm('Ты готов?');
//console.log(answer);

//let answer = prompt('Есть ли Вам 18?', 'Да');
//console.log(typeof(null));

let numw = 50;

switch (numw) {
    case numw < 49:
        console.log('НЕ ВЕРНО!');
        break;
    case numw > 100:
        console.log('МНОГО!');
        break;
    case numw > 80:
        console.log('ВСЕ ЕЩЕ МНОГО!');
        break;
    case 50:
        console.log('ВЕРНО!');
        break;
}