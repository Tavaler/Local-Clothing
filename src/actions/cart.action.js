import * as constants from "../constants/redux";

export const setCart = (payload) => ({
  type: constants.CART_SET_CART,
  payload
})

export const setTotal = (payload) => ({
  type: constants.CART_SET_TOTAL,
  payload
})

export const clear = () => ({
  type: constants.CART_CLEAR, 
})
