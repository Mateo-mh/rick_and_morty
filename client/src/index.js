import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Auth0Provider domain='dev-c7fuxbm4w6pxoxlt.us.auth0.com' 
    clientId='4nmc55h9cToimeKZckwGqQ8tLl5qtIb5' 
    redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
