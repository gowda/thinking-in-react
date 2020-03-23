import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ProductRow from './product-row';

describe('ProductRow', () => {
  let table = null;
  let container = null;

  beforeEach(() => {
    table = document.createElement('table');
    container = document.createElement('tbody');
    table.appendChild(container);
    document.body.appendChild(table);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    table.remove();
    table = null;
  });

  it('renders product', () => {
    act(() => {
      render(
        <ProductRow
          product={{ name: 'Test product name', stocked: true, price: '$0.99' }}
        />,
        container,
      );
    });
    expect(document.querySelector('tr > td:first-child').innerHTML).toBe('Test product name');
    expect(document.querySelector('tr > td:last-child').innerHTML).toBe('$0.99');
  });

  it('renders "out of stock" product wrapped in span', () => {
    act(() => {
      render(
        <ProductRow
          product={{ name: 'Test product name', stocked: false, price: '$0.99' }}
        />,
        container,
      );
    });
    expect(document.querySelector('tr > td:first-child').innerHTML).toBe(
      '<span style="color: red;">Test product name</span>',
    );
  });
});
