import { combineReducers } from 'redux';
import { booksReducer } from './reducers/books/booksReducer';
import { userReducer } from './reducers/user/userReducer';

export const reducers = combineReducers({
  books: booksReducer,
  user: userReducer
});

export default reducers;
