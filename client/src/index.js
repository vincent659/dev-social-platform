import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
/**
 * dependencies used
 *
 * npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment uuid
 */
/**
 * Setup Steps
 * 1.
 * As we don't need git in the client repo we will delete the 'git.ignore' and 'README.MD' file
 * In terminal within the client path perform 'rm -rf .git' to delete the git file.
 *
 * 2.
 * "proxy": "http://localhost:5000"
 * Add proxy in the package.json so we don't have to have to keep adding 'http://localhost:5000'
 * in the 'axios.get()' like 'axios.get('http://localhost:5000')' and instead we can simply make it into
 * axios.get('/api/profile').
 */

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
