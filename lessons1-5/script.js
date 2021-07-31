'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let income = 'Стипендия';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 2000;

let start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))
};

start();

let showTypeOf = function (data) {
    console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);

console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

let expenses1, expenses2;

let getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов');
        }

        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulateMonth = function () {
    return money - expensesAmount;
};

console.log(getAccumulateMonth());

let accumulatedMonth = getAccumulateMonth();

let budgetDay = Math.floor(accumulatedMonth / 30);

console.log('Дневной бюджет равен ' + budgetDay);

let getStatusIncome = function () {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 600) {
        return ('К сожалению, у вас уровень дохода ниже среднего');
    } else {
        return ('Что-то пошло не так');
    }
};

console.log(getStatusIncome());

let getTargetMonth = function () {
    return (mission / accumulatedMonth);
};

getTargetMonth();

let period = Math.ceil(getTargetMonth());

if (period < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута');
};

