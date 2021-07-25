let money = 270;
let income = 'Стипендия';
let addExpenses = 'Интернет, еда, проездной';
let deposit = false;
let mission = 2000;
let period = 12;
let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

console.log('Дневной бюджет равен ' + budgetDay);
