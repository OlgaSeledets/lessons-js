'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 2000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
              appData.addExpenses = addExpenses.toLowerCase().split(', ');
              appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов')] = prompt('Во сколько это обойдется?'); 
        }
    },
            
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
       }
    },

    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay < 600) {
            return ('К сожалению, у вас уровень дохода ниже среднего');
        } else {
            return ('Что-то пошло не так');
        }
    },

    getTargetMonth: function () {
        return (appData.mission / appData.budgetMonth);
    },   
};

appData.asking();

console.log('Наша программа включает в себя данные: ');

for (let key in appData) {
    console.log(key + ' ' + appData[key]);
}

let expensesMonth = appData.getExpensesMonth();

console.log('Расходы за месяц: ' + appData.expensesMonth);

appData.getBudget();

if (appData.budgetDay < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
};

console.log(appData.getStatusIncome());




