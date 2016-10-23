import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

describe('App', () => {
  it('App uses Provider and renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})