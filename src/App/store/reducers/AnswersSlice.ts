/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TForm, TAnswers } from 'types';

const initialState: TAnswers = { answers: [] };

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswers(state, action: PayloadAction<TForm>) {
      state.answers.push(action.payload);
    },
  },
});

export default answersSlice.reducer;
