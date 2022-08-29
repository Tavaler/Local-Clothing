import * as constants from '../constants/redux';

export const setProductNew = payload => dispatch =>
  dispatch({
    type: constants.PRODUCT_SET_NEWPRODUCT,
    payload,
  });

export const setProductBestSeller = payload => dispatch =>
  dispatch({
    type: constants.PRODUCT_SET_BESTSELLER,
    payload,
  });

export const setProducts = payload => dispatch =>
  dispatch({
    type: constants.PRODUCT_SET_PRODUCTS,
    payload,
  });

export const clearProducts = () => dispatch =>
  dispatch({
    type: constants.PRODUCT_SET_PRODUCTS,
  });

export const setCategoryIndex = payload => dispatch =>
  dispatch({
    type: constants.PRODUCT_SET_CATEGORY_INDEX,
    payload,
  });

export const setCategories = payload => dispatch =>
  dispatch({
    type: constants.PRODUCT_SET_CATEGORIES,
    payload,
  });
