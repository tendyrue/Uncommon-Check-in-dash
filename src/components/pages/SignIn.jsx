import React from 'react';
import "./Pages.css";
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div>
        <h1>SignIn</h1>
        <Link to="/" >Sign Up</Link>
    </div>
  );
};
