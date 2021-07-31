const langOne = prompt('ru или en?');

if (langOne === 'ru') {
    console.log('Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье');
} else if (langOne === 'en') {
    console.log('Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday');
}

const langTwo = prompt('ru или en?');

switch (langTwo) {
    case 'en':
        console.log('Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday');
        break;
    case 'ru':
        console.log('Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье');
        break;
}

const langThree = prompt('ru или en?');

let arr = [langThree];

arr['ru'] = ['Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье'];
arr['en'] = ['Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday'];

console.log(arr[langThree]);

let namePerson = prompt('Введите имя пользователя');

let result = namePerson === 'Артём' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';

console.log(result);

const text = '         Это моя строка Это моя строка       ';

const getString = function(text) {
    if (typeof(text) === 'number') {
        return ('Это не строка');
    } else if (text.length > 30) {
        return (text.trim().slice(0, 30) + '...');
    } else {
        return text.trim();
    }
}

console.log(getString(text));

const arrNum = ['1100', '1200', '2200', '2300', '3300', '3400', '4400'];

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i].charAt(0) === '2' || arrNum[i].charAt(0) === '4') {
        console.log(arrNum[i]);
    }
}

const NUM = 100;
let prime = true;

for (let i = 2; i <= NUM; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
        }
    }
    if (prime === true) {
        console.log(i, 'Делители этого числа 1 и ', i);
    }
    prime = true;
}


