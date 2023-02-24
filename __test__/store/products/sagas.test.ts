import { getProducts } from '../../../src/store/products/sagas';

describe('getProducts', () => {
  test('should first', async () => {
    const products = await getProducts();

    expect(typeof products.data.products).toEqual([]);
    console.log(products.data.products);
    // expect(getProducts).toBeCalledTimes(1);
  });
});
