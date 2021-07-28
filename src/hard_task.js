let lang = prompt('ru или en?');

if (lang === 'ru') {
    console.log('Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье');
} else if (lang === 'en') {
    console.log('Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday');
}

lang = prompt('ru или en?');

switch (lang) {
    case 'en':
        console.log('Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday');
        break;
    case 'ru':
        console.log('Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье');
        break;
}

lang = prompt('ru или en?');

let arr = [lang];

arr['ru'] = ['Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье'];
arr['en'] = ['Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday'];

console.log(arr[lang]);

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