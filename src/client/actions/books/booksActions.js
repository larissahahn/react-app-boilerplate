import { ADD_BOOK, GET_BOOKS_COUNT, GET_BOOKS } from '../types';

export const addBook = (book) => ({
  type: ADD_BOOK
});

export const getBooksCount = () => ({
  type: GET_BOOKS_COUNT
});

export function getBooks() {
  return function (dispatch, getState, api) {
    api
      .get('/api/books')
      .then(function (res) {
        dispatch({
          type: GET_BOOKS,
          payload: res.data
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}
