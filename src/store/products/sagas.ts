import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchProductFailure, fetchProductSuccess } from './actions';
import { FETCH_PRODUCT_REQUEST } from './actionTypes';
import { ProductState } from './types';

export const getProducts = () =>
  axios.get<ProductState>('https://dummyjson.com/products');

function* fetchProductSaga(): any {
  try {
    const response = yield call(getProducts);

    yield put(
      fetchProductSuccess({
        products: response.data.products,
      })
    );
  } catch (e: any) {
    yield put(
      fetchProductFailure({
        error: e.message,
      })
    );
  }
}

function* productSaga() {
  yield all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga)]);
}

export default productSaga;
