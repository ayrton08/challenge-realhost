import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from './actionTypes';

import { ProductsActions, ProductState } from './types';

const initialState: ProductState = {
  pending: false,
  products: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ProductsActions) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
        error: null,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        pending: false,
        products: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
