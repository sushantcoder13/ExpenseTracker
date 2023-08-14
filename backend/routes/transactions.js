const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, deleteIncomes, getIncomes } = require('../controllers/income');

const router = require('express').Router();




router.post('/add-income',addIncome)
        .get('/get-incomes',getIncomes)
        .delete('/delete-income/:id',deleteIncomes)
        .post('/add-expense',addExpense)
        .get('/get-expense',getExpense)
        .delete('/delete-expense/:id',deleteExpense)
module.exports = router 