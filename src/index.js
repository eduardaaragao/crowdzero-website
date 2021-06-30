import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

// Definição da BASE url na biblioteca axios

axios.defaults.baseURL = 'https://crowdzeroapi.herokuapp.com/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

ReactDOM.render(
  
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);