import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{value:0},
    // reducers 복수형 중요
    reducers:{
      up:(state, action)=>{
        state.value = state.value + action.payload;
      }
    }
  });

export default counterSlice;
export const {up} = counterSlice.actions;