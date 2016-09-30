import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        <NavBar title="Login" url="/" />
        <div className='container'>
          <Link to="/login">Login</Link>
        </div>
      </div>
    )
};
