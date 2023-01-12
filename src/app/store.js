import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import movieSlice from '../features/movies/movieSlice';
import todoSlice from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todoSlice,
    movies: movieSlice
  }
});
