// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

const first = document.getElementById('button1');
const second = document.getElementById('button2');
const third = document.getElementById('button3');
const screenBody = document.querySelector('body');

function changeBack() {
    first.addEventListener('click', function() {
        screenBody.style.backgroundColor = 'blue';
    });
}

function double() {
    second.addEventListener('dblclick', function() {
        screenBody.style.backgroundColor = 'pink';
    });
}

function brown() {
    third.addEventListener('mouseover', function() {
        screenBody.style.backgroundColor = 'brown';
    });
}

changeBack();
double();
brown();