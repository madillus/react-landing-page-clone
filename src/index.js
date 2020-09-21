import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        /* Use better layout model (border-box) */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          min-height: 100%;
          background-color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
          font-size: 14px;
          line-height: 20px;
          color: #333;
        }
        button {
          line-height: 1.42857143;
          cursor: pointer;
        }

        h1,
        h2 {
          margin-top: 0;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 15px;
          line-height: 1.1;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
