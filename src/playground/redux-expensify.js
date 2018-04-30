import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*
  const demoState = {
    expenses: [{
      id: '11111',
      description: '',
      note: '',
      amount: $123,
      createdAt: 0
    }],
    filters: {
      text: '',
      sortBy: '', // amount or date
      startDate: undefined,
      endDate: undefined
    }
  }
*/

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        return expense;
      });
    default:
      return state;
  }
}

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_TEXT_FILTER
const setTextFilter = (text='') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER': 
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

store.subscribe(()=> {
  console.log(store.getState());
});

const expesnseOne = store.dispatch(addExpense({description: 'Rent', amount: 12400}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 100}));
store.dispatch(removeExpense({id: expesnseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 300}));

store.dispatch(setTextFilter('Rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(10350));
store.dispatch(setStartDate());
store.dispatch(setEndDate(150));
store.dispatch(setEndDate());
