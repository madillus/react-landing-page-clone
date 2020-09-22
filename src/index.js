import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/core';
import './index.css';
import 'typeface-poppins';

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
          position: absolute;
          margin: 0;
          max-width: 100%;
          background-color: #fff;
          font-family: poppins;
          font-size: 26px;
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
