import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fetch('postgres://sema:zAK4NXvVWLs3irjaUBgO1ib27nDNpqqi@dpg-cgq0i1m4dad9donv0dj0-a/sema/login', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});


export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  const response = await fetch('postgres://sema:zAK4NXvVWLs3irjaUBgO1ib27nDNpqqi@dpg-cgq0i1m4dad9donv0dj0-a/sema/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});

export const signupT = createAsyncThunk('auth/signup', async (credentials) => {
  const response = await fetch('postgres://sema:zAK4NXvVWLs3irjaUBgO1ib27nDNpqqi@dpg-cgq0i1m4dad9donv0dj0-a/sema/therapists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    client: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setToken: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    setUser: (state, action) => ({
      ...state, client: action.payload,
    }),
    clearAuthState: (state) => ({
      ...state,
      token: null,
      client: null,
      status: 'idle',
      error: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state, status: 'loading',
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        token: action.payload.jwt,
        client: action.payload.client,
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(signup.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(signup.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        token: action.payload.jwt,
        client: action.payload.client,
      }))
      .addCase(signup.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { setToken, setUser, clearAuthState } = authSlice.actions;

export default authSlice.reducer;
