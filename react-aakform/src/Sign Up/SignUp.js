/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../redux/registration'

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user_type, setUser_type] = useState('');
  const [name, setName] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      user_type,
      name,
      last_name,
      email,
      password,
    };

    dispatch(postSignUp(user));
    navigate('/sign-in');
  };
  return (
    <div className="wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="brand-title">Sign Up</h1>
        <div className='form-body'>
          <div className="input-body">
            <input
                placeholder="User Type"
                type="text"
                name="user_type"
                className="input-box"
                value={user_type}
                onChange={(e) => {
                  setUser_type(e.target.value);
                }}
              />
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input-box"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="Last Name"
              type="text"
              name="last_name"
              className="input-box"
              value={last_name}
              onChange={(e) => {
                setLast_name(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="input-box"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="input-box"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            
          </div>
          <input className="submit-login" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;