import { createSlice } from "@reduxjs/toolkit";

// here is where user slice is created for readux is being implemented and we an access to this layer from everywhere.

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// select is basically how we can go head and grab the information once its done.

//export const selectUser = (state) => state.user.value;   // not working

// state.user.user ==> state for local management
// ==> user for userSlice.
// ==> user for user pease of state

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
