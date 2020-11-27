import { combineReducers } from 'redux';
import { booksReducer } from './reducers/books-reducer';

export const reducers = combineReducers({
  books: booksReducer
});

export default reducers;
