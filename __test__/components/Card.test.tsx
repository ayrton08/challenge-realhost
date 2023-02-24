import React from 'react';
import { render, screen } from '@testing-library/react';

import { Card } from '../../src/components/Card';

const product = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
  ],
};

describe('<Card />', () => {
  test('should contain the title', () => {
    render(<Card {...product} />);

    const title = screen.getByText(product.title);

    expect(title).toBeDefined();
  });

  test('should contain the price', () => {
    render(<Card {...product} />);

    const price = screen.getByText('$' + product.price);

    expect(price).toBeDefined();
  });

  test('should contain the description', () => {
    render(<Card {...product} />);

    const description = screen.getByText(product.description);

    expect(description).toBeDefined();
  });

  test('should contain the image', () => {
    render(<Card {...product} />);

    const image = screen.getByAltText('product');

    expect(image).toBeDefined();
    expect(image.src).toContain(product.images[0]);
  });
});
