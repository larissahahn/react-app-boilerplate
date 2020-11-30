import { combineReducers } from 'redux';
import { booksReducer } from './reducers/books/booksReducer';

export const reducers = combineReducers({
  books: booksReducer
});

export default reducers;
