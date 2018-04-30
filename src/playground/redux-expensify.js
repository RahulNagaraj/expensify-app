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
// EDIT_EXPENSE
// REMOVE_EXPENSE

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

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
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
      return state.filter(({id}) => id !== action.id );
    default:
      return state;
  }
}

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SORT_BY_TEXT
// SET_START_DATE
// SET_END_DATE
const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
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
