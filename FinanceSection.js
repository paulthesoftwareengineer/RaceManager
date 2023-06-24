import React, { useState } from 'react';

const FinanceSection = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addExpense = () => {
    if (expenseName !== '' && expenseAmount !== '') {
      const expense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
      };

      setExpenses([...expenses, expense]);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const calculateRevenue = () => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    return budget - totalExpenses;
  };

  return (
    <div>
      <h2>Finance Section</h2>
      <label>
        Budget:
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Expense Name:
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </label>
      <label>
        Expense Amount:
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(parseFloat(e.target.value))}
        />
      </label>
      <button onClick={addExpense}>Add Expense</button>
      <h3>Expenses:</h3>
      <ul>
        {expenses.map((expense,
