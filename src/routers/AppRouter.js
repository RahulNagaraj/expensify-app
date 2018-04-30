import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    <p>This is dashboard component</p>
  </div>
);

const AddExpensePage = () => (
  <div>
    <p>This is add expense component</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <p>This is edit expense component</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>This is help component</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <p>404 Not Found! - <Link to="/">Go Home</Link></p>
  </div>
);

const Header = () => (
  <div>
    <header>
      <h1>Expensify</h1>
      <NavLink exact={true} to="/" activeClassName="is-active">Dashboard </NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense  </NavLink>
      <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
