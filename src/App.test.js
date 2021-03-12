import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contacts from './src/Ccomponents/Contacts'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contatcs renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contacts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
