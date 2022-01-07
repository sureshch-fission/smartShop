import { createSlice } from "@reduxjs/toolkit";

const initialAuthstate = {
  isAuthenticated: false,
};
const loginSlice = createSlice({
  name: "loginAuthentication",
  initialState: initialAuthstate,

  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', state.isAuthenticated);
    },
    logout(state){
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", state.isAuthenticated);
      localStorage.removeItem('userDetails');
      localStorage.removeItem('isAuthenticated');
    }
    
    
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
