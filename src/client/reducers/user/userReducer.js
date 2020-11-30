import { GET_USER } from '../../actions/types';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload.data[0];
    default:
      return state;
  }
};

export default userReducer;
