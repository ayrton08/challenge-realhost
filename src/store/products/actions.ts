import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from './actionTypes';

import {
  FetchProductFailure,
  FetchProductFailurePayload,
  FetchProductRequest,
  FetchProductSuccess,
  FetchProductSuccessPayload,
} from './types';

export const fetchProductRequest = (): FetchProductRequest => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (
  payload: FetchProductSuccessPayload
): FetchProductSuccess => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload,
});

export const fetchProductFailure = (
  payload: FetchProductFailurePayload
): FetchProductFailure => ({
  type: FETCH_PRODUCT_FAILURE,
  payload,
});
