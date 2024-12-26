
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer'; // Adjust the path based on your file structure

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});


export default store;