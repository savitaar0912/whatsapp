// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  person: []
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
    },
    oneUser: (state, action) => {
      state.person = (action.payload)
    }
  }
});

export const { addUser, removeUser, oneUser } = userSlice.actions;
export const selectUser = (state) => state.user.users;
export const selectPerson = (state) => state.user.person;
export default userSlice.reducer;
