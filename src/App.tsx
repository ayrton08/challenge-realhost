import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPendingSelector,
  getProductsSelector,
  getErrorSelector,
} from './store/products/selectors';
import { fetchProductRequest } from './store/products/actions';
import { Card } from './components/Card';
import { Loader } from './components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const products = useSelector(getProductsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  return (
    <div className="grid place-content-center min-h-screen bg-gray-200">
      {pending ? (
        <div className="grid justify-items-center gap-4">
          <Loader />
          <span>Loading...</span>
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <h1 className='text-3xl font-bold pt-5'>Products</h1>
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
