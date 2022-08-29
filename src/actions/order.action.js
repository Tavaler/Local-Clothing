import * as constants from '../constants/redux';
import {ORDER_CLEAR} from './../constants/redux';

export const setOrders = payload => dispatch =>
  dispatch({
    type: constants.ORDER_SET_ORDER,
    payload,
  });

export const setPagination = payload => dispatch =>
  dispatch({
    type: constants.ORDER_SET_PAGINATION,
    payload,
  });

export const clear = () => dispatch =>
  dispatch({
    type: constants.ORDER_CLEAR,
  });
