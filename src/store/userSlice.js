// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      state.users.push(action.payload);
    },
    remove: (state, action) => {
      state.users = state.users.filter(user => user !== action.payload);
    }
  }
});

export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
