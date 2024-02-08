// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user !== action.payload);
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUser = (state) => state.user.users;
export default userSlice.reducer;
