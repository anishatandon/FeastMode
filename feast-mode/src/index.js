import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './backend/store'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader'

import App from './components/App'


import './index.css'

const root = document.getElementById('root')

ReactDOM.render(<Loader />, root)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
    root
  )
})
