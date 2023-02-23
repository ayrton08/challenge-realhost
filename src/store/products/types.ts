import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from './actionTypes';

export interface ProductState {
  pending: boolean;
  products: IProduct[];
  error: string | null;
}

export interface Products {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface FetchProductSuccessPayload {
  products: IProduct[];
}

export interface FetchProductFailurePayload {
  error: string;
}

export interface FetchProductRequest {
  type: typeof FETCH_PRODUCT_REQUEST;
}

export type FetchProductSuccess = {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: FetchProductSuccessPayload;
};

export type FetchProductFailure = {
  type: typeof FETCH_PRODUCT_FAILURE;
  payload: FetchProductFailurePayload;
};

export type ProductsActions =
  | FetchProductRequest
  | FetchProductSuccess
  | FetchProductFailure;
