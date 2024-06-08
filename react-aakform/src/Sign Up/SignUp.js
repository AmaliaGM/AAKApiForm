/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUp } from '../redux/registration';
import './SignUp.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const [user_type, setUsertype] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      user_type,
      first_name,
      last_name,
      username,
      email,
      password,
    };
    dispatch(postSignUp(user));
  };
  return (
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
                  setUsertype(e.target.value);
                }}
              />
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input-box"
              value={first_name}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              placeholder="Last Name"
              type="text"
              name="last_name"
              className="input-box"
              value={last_name}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
             <input
              placeholder="User Name"
              type="text"
              name="username"
              className="input-box"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
          <input className="submit-login" type="submit" value="Sign Up" />
          </div>
        </div>
      </form>
  );
}

export default SignUp;