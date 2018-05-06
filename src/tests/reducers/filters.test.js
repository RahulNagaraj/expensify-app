import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const action = {
    type: '@@INIT'
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const amount = 'amount';
  const action = {
    type: 'SORT_BY_AMOUNT'
  };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toEqual(amount);
});

test('should set sort by to date', () => {
  const date = 'date';
  const action = {
    type: 'SORT_BY_DATE'
  };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe(date);
});

test('should set filter text', () => {
  const text = '123e';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toEqual(text);
});

test('should set start date', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate)
});

test('should set end date', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
