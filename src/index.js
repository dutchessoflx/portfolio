import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { PageWithHeader, Provider as BumbagProvider, css } from 'bumbag';

const theme = {
global: {
    fontSize: 18,
    styles: {
      base: css`
        html,
        body {
          background-color: rgba(46, 120, 125, 0.81);
          color: white;

        }
        h2{
          padding: 20px;
          margin-top: 20px;
        }
        .heading{
          margin-top: 20px;
        }


      `
    }
  },
  fonts: {
    default: " 'Glegoo', serif;"
  },
  palette: {
    primary: 'white'
  },
  breakpoints: {
    mobile: 520,
    tablet: 960
  },
  Button: {
    defaultProps: {
      palette: 'primary'
    }
  },
  Heading: {
    styles: {
      base: {
        color: 'primary'
      }
    }
  }
}


ReactDOM.render(
  <BumbagProvider theme={theme}>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
</BumbagProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
