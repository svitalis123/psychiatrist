import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
  isLoading: false,
};

const SERVICES_URL = 'http://127.0.0.1:8000/clients/1/journals';

export const fetchServices = createAsyncThunk('FETCH_SERVICES', async () => {
  const response = await fetch(SERVICES_URL);
  const data = await response.json();
  console.log("backend",data)
  return data;
});

export const postServices = createAsyncThunk('POST_SERVICES', async ({data }) => {
  const req = await fetch(SERVICES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...data}),
  });
  const res = await req.json();
  return res;
});

const reservationSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {},
  extraReducers: {
    [postServices.pending]: (state) => ({ ...state, isLoading: true }),
    [postServices.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      formData: action.payload,
    }),
    [postServices.rejected]: (state) => ({ ...state, isLoading: false }),
    [fetchServices.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchServices.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      formData: action.payload,
    }),
    [fetchServices.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default reservationSlice.reducer;