import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import AppRouter from './routers/AppRouter'
import './index.css'
import posthog from "posthog-js";

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>{JSX}</React.StrictMode>,
  document.getElementById('root'),
)

if (process.env.REACT_APP_ENVIRONMENT==='production'){
  process.env.REACT_APP_POSTHOG_KEY &&
  posthog.init(process.env.REACT_APP_POSTHOG_KEY, {
    api_host: process.env.REACT_APP_POSTHOG_DOMAIN,
    secure_cookie: true,
    cookie_expiration: 99999999999,
  });
}
