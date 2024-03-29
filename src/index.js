import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './class-components/App';
// import App from './higher-order-components/App';
// import App from "./functional-components/App";
// import App from "./custom-hooks/App";
// import App from "./use-reducer/App";
// import App from "./react-context/App";
// import App from "./compound-components/App";
// import App from "./error-boundary/App";
// import App from "./react-with-redux-toolkit/App";
import App from "./redux-thunk/App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
