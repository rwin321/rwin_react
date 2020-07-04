import React from 'react';
import { render } from '@testing-library/react';
import ErvinJSApp from "./App";
import ReactDOM from 'react-dom';

test('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErvinJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div)
})