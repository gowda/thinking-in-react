import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { ProductCategoryRow } from './app';

describe('ProductCategoryRow', () => {
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

  it('renders without a category name', () => {
    act(() => {
      render(<ProductCategoryRow />, container);
    });
    expect(container.textContent).toBe('');
  });

  it('renders with a category name', () => {
    act(() => {
      render(<ProductCategoryRow category="Test category" />, container);
    });
    expect(container.textContent).toBe('Test category');
  });
});
