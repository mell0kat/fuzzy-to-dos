import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { ThemeProvider } from 'styled-components'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer, applyMiddleware(logger))

export const styledTheme = {
  colors: {
    fuzzyGreen: '#58C096',
    fuzzyDark: '#1E1E1E',
    fuzzyLight: '#ECECEC'
  }
}

render(
  <Provider store={store}>
    <ThemeProvider theme={styledTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
