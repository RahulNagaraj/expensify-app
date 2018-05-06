import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <p>This is add expense component</p>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
