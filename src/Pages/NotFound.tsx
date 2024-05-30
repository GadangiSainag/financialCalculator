import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={classes.notFound}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
