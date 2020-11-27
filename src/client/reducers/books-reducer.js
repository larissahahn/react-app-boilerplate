import { ADD_BOOK, GET_BOOKS_COUNT, GET_BOOKS } from '../actions/types';

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload.data;
    default:
      return state;
  }
};

export default booksReducer;
