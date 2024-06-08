import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const postSignUp = createAsyncThunk('signup', async (user) => {
    try {
        const response = await fetch('https://django-dev.aakscience.com/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    if (response.ok) {
        const data = await response.json();
        return data; 
    }
    } catch(e){
        throw e;
    }
    
});

const SignUpUser = createSlice({
    name: 'user',
    initialState: {
      user: {},
      isloading: false,
      hasErrors: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(postSignUp.pending, (state) => {
          state.isloading = true;
          state.hasErrors = false;
    }
    )
    .addCase(postSignUp.fulfilled,
        (state,action) => {
            state.user = action.payload;
            state.isloading = false;
            state.hasErrors = false; 
        }
    )
    .addCase(postSignUp.rejected, (state) => {
        state.isloading = false;
        state.hasErrors = true;
    })
  }
})
export const getResponse = (state) => state.user;
export default SignUpUser.reducer;