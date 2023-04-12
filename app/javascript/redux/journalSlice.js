import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// const user = useSelector((state) => (state.auth.client ? state.auth.client : null));
// console.log("this is", user)
const initialState = {
  formData: [],
  isLoading: false,
};

// const SERVICES_URL = `http://127.0.0.1:8000/clients/1/journals`;

export const fetchServices = createAsyncThunk('FETCH_SERVICES', async (id) => {
  const response = await fetch(`postgres://sema:zAK4NXvVWLs3irjaUBgO1ib27nDNpqqi@dpg-cgq0i1m4dad9donv0dj0-a/sema/clients/${id}/journals`);
  const data = await response.json();
  console.log("backend",data)
  return data;
});

export const postServices = createAsyncThunk('POST_SERVICES', async ({data }) => {
  const req = await fetch(`postgres://sema:zAK4NXvVWLs3irjaUBgO1ib27nDNpqqi@dpg-cgq0i1m4dad9donv0dj0-a/sema/clients/${data.id}/journals`, {
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