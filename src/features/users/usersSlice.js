import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Bill Gates' },
  { id: '1', name: 'Thomas Giesel' },
  { id: '2', name: 'Uwe Mit' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
