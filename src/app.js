import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import visibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  const visibleExpense = visibleExpenses(state.expenses, state.filters);
  console.log('visibleExpense: ', visibleExpense);
});

store.dispatch(addExpense({description: 'Gas bill', amount: 500, createdAt: 10000}));
store.dispatch(addExpense({description: 'Rent bill', amount: 8000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Water bill', amount: 600, createdAt: 90000}));

store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
// }, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

