import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './components/App'
import Firebase, { FirebaseContext } from './backend/Firebase'
import { Provider } from 'react-redux'
import store from './backend/store'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader'

const root = document.getElementById('root')

ReactDOM.render(<Loader />, root)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
        {/* <FirebaseContext.Provider value={new Firebase()}> */}
          <App />
        {/* </FirebaseContext.Provider> */}
      </BrowserRouter>
    </Provider>,
    root
  )
})
