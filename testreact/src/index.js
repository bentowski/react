import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import Header from "./Header"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <body>
    <div>
      <Header />
    </div>
    <div>
      <App />
    </div>
  </body>
  ,
  document.getElementById('root'));
registerServiceWorker();
