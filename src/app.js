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

store.dispatch(addExpense({description: 'Gas bill', amount: 500}));
store.dispatch(addExpense({description: 'Water bill', amount: 600}));

store.dispatch(setTextFilter('bill'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

