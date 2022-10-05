import React from 'react';

// import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { FilterProvider } from './utils/context';

import './index.css';
import App from './App'


const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
#root {
  flex-grow: 1;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <BrowserRouter>
        < GlobalStyle />
        <App />
      </BrowserRouter>
    </FilterProvider>
  </React.StrictMode >
);

