import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import { init } from 'emailjs-com';
init("user_icrCIz9GCW0VYzuP68nr2");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
