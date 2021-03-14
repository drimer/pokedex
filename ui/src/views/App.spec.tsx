import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../services/store/store';
import App from './App';

describe('App', () => {
  it('renders without errors', () => {
    const store = createAppStore();
    expect(() => render(<Provider store={store}><App/></Provider>)).not.toThrow()
  })
});
