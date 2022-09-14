import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userInfo: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: function(state, action) {
      const token = action.payload;
      const userInfo = getUserInfo(token);

      return {...state, token, userInfo };
    }
  }
});

export const { login } = authSlice.actions

export default authSlice.reducer

function getUserInfo(token) {
  const userInfoJson = JSON.parse(atob(token.split('.')[1]));

  const userInfo = {
    id: userInfoJson['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'],
    username: userInfoJson['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
    role: userInfoJson['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
  };
  return userInfo;
}
