import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// const user = useSelector((state) => (state.auth.client ? state.auth.client : null));
// console.log("this is", user)
const initialState = {
  formData: [],
  isLoading: false,
};

const SERVICES_URL = `http://127.0.0.1:8000/casenotes`;

export const fetchCases = createAsyncThunk('FETCH_CASES', async () => {
  const response = await fetch(SERVICES_URL);
  const data = await response.json();
  console.log("casenotes",data)
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
    [fetchCases.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchCases.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      formData: action.payload,
    }),
    [fetchCases.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default reservationSlice.reducer;