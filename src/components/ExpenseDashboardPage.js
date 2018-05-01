import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <p>This is add expense component</p>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
