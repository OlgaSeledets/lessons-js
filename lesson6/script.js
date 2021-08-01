'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let desiredNumber = Math.ceil(Math.random() * 99) + 1;
let num = prompt('Угадай число от 1 до 100');
let attempts = 1;
let remainder = 9;
let flag = true;

let check = function () {
    while (!isNumber(num)) {
        num = prompt('Введи число!');
    }
};

check();

function player() {
    if (flag) {
        if (num != desiredNumber && attempts <= 9) {
            if (num > desiredNumber) {
                num = prompt('Загаданное число меньше, осталось попыток ' + remainder);

                if (!isNumber(num)) {
                    check();
                }

                attempts++;
                remainder--;
                
            } else if (num < desiredNumber) {
                num = prompt('Загаданное число больше, осталось попыток ' + remainder);

                if (!isNumber(num)) {
                    check();
                }

                attempts++;
                remainder--;
            }
        } else if (attempts > 9) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                flag = true;
                num = prompt('Угадай число от 1 до 100');
                attempts = 1;
                remainder = 9;
                desiredNumber = Math.ceil(Math.random() * 99) + 1;
                player();
            } else{
                alert('Пока :)');
                flag = false;
            }

        } else {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                flag = true;
                num = prompt('Угадай число от 1 до 100');
                attempts = 1;
                remainder = 9;
                desiredNumber = Math.ceil(Math.random() * 99) + 1;
                player();
            } else {
                alert('Пока :)');
                flag = false;
            }
        }
        player();
    }  
}

player();
