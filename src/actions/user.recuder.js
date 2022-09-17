import * as constant from '../constants/redux';

// export const setToken =payload => dispatch =>
// dispatch({
//     type: constant.ACCOUNT_SET_TOKEN,
//     payload,
// });

// export const clear =()=>dispatch=>
// dispatch({
//     type: constant.ACCOUNT_CLEAR,
// });

// export const setUser =payload =>dispatch=>
// dispatch({
//     type: constant.ACCOUNT_SET_USER,
//     payload,
// });

const initialState = {
    token: null,
    user: null,
  };
  
  export default (state = initialState, {type, payload}) => {
    switch (type) {
      case constant.ACCOUNT_SET_TOKEN:
        return {...state, token: payload};
      case constant.ACCOUNT_CLEAR:
        return {...state, token: null, user: null};
      case constant.ACCOUNT_SET_USER:
        return {...state, user: payload}
  
      default:
        return state;
    }
  };
  