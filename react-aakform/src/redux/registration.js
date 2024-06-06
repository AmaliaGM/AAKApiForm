import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const postSignUp = createAsyncThunk('users/signup', async (user) => {
  await fetch('https://django-dev.aakscience.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
      // localStorage.setItem('user', JSON.stringify(user));
      return res.json();
    }
    throw new Error(res);
  });
});
