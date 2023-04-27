import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TForm } from '@types';

const initialState: { answers: TForm[] } = { answers: [] };

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
