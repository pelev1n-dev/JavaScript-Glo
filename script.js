'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function () {
  do {
    money = prompt('Your monthly income?', '90000');
  }
  while (!isNumber(money));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 3500000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function (){
    let expensesAmount = 0;
    let expensesName = '';
    let addExpenses = prompt('List the possible expenses for the calculated period separated by commas', 'Internet, Games, Trainings');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Do you have a bank deposit?');
    for (let i = 0; i < 2; i++) {
      expensesName = prompt('Enter the required expense item');
      do {
        expensesAmount = +prompt(`How much will it cost?`);
      } while (!isNumber(expensesAmount));
      appData.expenses[expensesName] = expensesAmount;
    }
  },
  getExpensesMonth: function () {
    for (let i in appData.expenses) {
      appData.expensesMonth += appData.expenses[i];
    }
  },
  getBudget: function () {
    appData.budgetMonth = Math.floor(appData.budget - appData.expensesMonth);
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function (a, b) {
    if ((Math.ceil(a / b)) < 0) {
      return ("Target not achieved");
    } else {
      return ("Target has been achieved: " + Math.ceil(a / b));
    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      console.log('You have a high level of income');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200 ) {
      console.log('You have an average income level');
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
      console.log('Unfortunately you have a lower than average income');
    } else {
      console.log('Something went wrong');
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Monthly expenses: ' + appData.expensesMonth);
console.log(appData.getTargetMonth(appData.mission, appData.budgetMonth));

console.log('Наша программа включает в себя данные: ');
for (let i in appData) {
  console.log(i, appData[i]);
}