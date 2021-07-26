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