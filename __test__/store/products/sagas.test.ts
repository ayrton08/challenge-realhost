import { getProducts } from '../../../src/store/products/sagas';

jest.setTimeout(10000);

describe('getProducts()', () => {
  test('should yield the products data', async () => {
    const { data } = await getProducts();

    expect(data.products.length).toBe(30);

    expect(typeof data.products).toEqual('object');
  });
});
