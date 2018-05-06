import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense object', () => {
  const action = editExpense('1234abc', {
    id: '1234abc',
    amount: 500,
    description: 'bill'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234abc',
    updates: {
      id: '1234abc',
      description: 'bill',
      amount: 500
    }
  });
});

test('should setup add expense action objcect with values', () => {
  const data = {
    description: 'rent',
    amount: 12000,
    createdAt: 1000000,
    note: 'Last month rent'
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...data
    }
  });
});

test('should setup add expense action objcect without values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
