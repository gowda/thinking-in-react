import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SearchBar from './search-bar';

describe('SearchBar', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders a text input field', () => {
    act(() => {
      render(<SearchBar />, container);
    });
    expect(document.body.querySelector('input[type=text]')).not.toBeNull();
  });

  it('renders a checkbox', () => {
    act(() => {
      render(<SearchBar />, container);
    });
    expect(document.body.querySelector('input[type=checkbox]')).not.toBeNull();
  });
});
