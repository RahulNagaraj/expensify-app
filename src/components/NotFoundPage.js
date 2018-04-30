import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404 Not Found! - <NavLink to="/">Go Home</NavLink></p>
  </div>
);

export default NotFoundPage;
