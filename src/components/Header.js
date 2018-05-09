import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <h1>Expensify</h1>
      <NavLink exact={true} to="/dashboard" activeClassName="is-active">Dashboard </NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
      <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
  </div>
);

export default Header;
