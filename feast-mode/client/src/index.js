import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './backend/store'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components"

import theme from './style/theme.js'
import GlobalStyles from './style/global.js'
import Loader from './components/Loader'
import App from './components/App.js'

const root = document.getElementById('root')

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <>
      <Loader />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    root
  )
})
