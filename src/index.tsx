import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer, hot } from 'react-hot-loader'
import Redbox from 'redbox-react'

import App from './App'

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>
      <Component />
    </AppContainer>,
    document.getElementById('contents')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })
}
