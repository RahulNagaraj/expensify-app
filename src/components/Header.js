import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({startLogout}) => (
  <div>
    <header>
      <h1>Expensify</h1>
      <NavLink exact={true} to="/dashboard" activeClassName="is-active">Dashboard </NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
      <NavLink to="/help" activeClassName="is-active">Help </NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()) 
});

export default connect(undefined, mapDispatchToProps)(Header);
