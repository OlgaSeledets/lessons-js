'use strict'

let money = +prompt ('Ваш месячный доход?');
let income = 'Стипендия';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 2000;
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');
let budgetMonth = money - (amount1 + amount2);
let period = Math.ceil(mission / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

console.log('Дневной бюджет равен ' + budgetDay);
console.log('Бюджет на месяц ' + budgetMonth);

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода')
} else if (budgetDay > 0 && budgetDay < 600){
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}
