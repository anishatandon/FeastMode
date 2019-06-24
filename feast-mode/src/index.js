import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
import Firebase, { FirebaseContext } from './components/Firebase';  //added

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}> //added
    <App />
  </FirebaseContext.Provider>, //added
  document.getElementById('root') //added
);

serviceWorker.unregister();
