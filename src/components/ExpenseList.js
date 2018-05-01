import React from 'react';
import { connect  } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    <p>{props.expenses.length}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseList);
