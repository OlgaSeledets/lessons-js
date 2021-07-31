'use strict'

let desiredNumber = Math.ceil(Math.random() * 100);
let message = prompt('Угадай число от 1 до 100');
let attempts = 1;
let remainder = 10;

function player() {
    if (message != desiredNumber && attempts <= 10) {
        if (message > desiredNumber) {
            message = prompt('Загаданное число меньше, осталось попыток ' + remainder);
            attempts++;
            remainder--;
            
        } else if (message < desiredNumber) {
            message = prompt('Загаданное число больше, осталось попыток ' + remainder);
            attempts++;
            remainder--;
        }
    } else if (attempts > 10) {
        confirm('Попытки закончились, хотите сыграть еще?');
    } else {
        confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    }
    player();
}

player();


