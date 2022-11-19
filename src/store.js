import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
const store = configureStore({
  // 복수형 아님! 그냥 reducer
  reducer:{
    counter:counterSlice.reducer
  }
})

export default store;
