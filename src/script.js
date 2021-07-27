'use strict'

let money = +prompt('Ваш месячный доход?');
let income = 'Стипендия';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 2000;
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = +prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);

console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

const getAccumulatedMonth = function() {
    return money - (amount1 + amount2);
}

console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.floor(accumulatedMonth / 30);

console.log('Дневной бюджет равен ' + budgetDay);

let getStatusIncome = function() {
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

const getExpensesMonth = function() {
    return amount1 + amount2;
}

console.log(getExpensesMonth());

const getTargetMonth = function() {
    return mission / accumulatedMonth;
}

console.log(getTargetMonth());

let period = Math.ceil(getTargetMonth());

console.log('Период равен ' + period + ' месяцев');
