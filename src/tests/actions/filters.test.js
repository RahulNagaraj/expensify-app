import moment from 'moment';
import { 
  sortByDate, 
  sortByAmount, 
  setTextFilter, 
  setStartDate, 
  setEndDate
} from '../../actions/filters';

test('should setup set start date filter action', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should setup set end date filter action', () => {
  const action = setEndDate(moment(2));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(2)
  });
});

test('should setup sort by date filter action', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup sort by amount filter action', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup set text filter action with no param', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup set text filter action with param', () => {
  const action = setTextFilter('bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  });
});
