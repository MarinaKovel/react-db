/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { search: '' };

export const searchValueSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValues(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export default searchValueSlice.reducer;
