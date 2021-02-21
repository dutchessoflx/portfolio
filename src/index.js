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
          font-family: 'Glegoo';

        }
        h2{
          padding: 20px;
          margin-top: 20px;
        }
        .heading{
          margin-top: 20px;
        }
        a.bb-Button{
          width: 250px;
          display: flex;
          margin-left: 0;
        }
        button:hover{
          cursor: pointer;
          font-weight: bolder;
          font-style: italic;
        }
        hr.bb-Divider{
          margin: 50px;
        }
        p.bb-Paragraph{
          align: center;
        }
        .css-1rbdlof{
          padding: 10px;
          margin: auto;
        }
        div.bb-PopoverContent{
          color: white;
          background-color: rgba(46, 120, 125, 1);
        }
        h3{
          margin-bottom: 0;
        }
        button.bb-PageWithSidebarDisclosure{
          margin-left: -231px;
          position: sticky;
          background-colour: none;
          margin-top: 10px;
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
