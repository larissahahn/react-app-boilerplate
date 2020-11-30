import { GET_USER } from '../types';

export function getUser() {
  return function (dispatch, getState, api) {
    api
      .get('/api/user')
      .then(function (res) {
        dispatch({
          type: GET_USER,
          payload: res.data
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}

export default getUser;
