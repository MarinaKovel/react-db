import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchAPI } from '../services/SearchService';
import { characterAPI } from '../services/CharacterService';
import searchReducer from './reducers/SearchValueSlice';
import answersReducer from './reducers/AnswersSlice';

const rootReducer = combineReducers({
  searchReducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
  answersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(searchAPI.middleware, characterAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
