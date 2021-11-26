import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { createTheme, UIThemeProvider } from 'stinodes-ui'
import { Router } from 'react-navi'
import Amplify from 'aws-amplify'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { routes } from './navigation/routes'
import awsconfig from './aws-exports'
import { shade, tint } from 'polished'

Amplify.configure(awsconfig)

const createColorGradient = (color: string) => [
  shade(0.6, color),
  shade(0.3, color),
  color,
  tint(0.3, color),
  tint(0.6, color),
]

const reds = createColorGradient('#CA2B30')
const yellows = createColorGradient('#FFA62B')
const darks = createColorGradient('#1A1423')

ReactDOM.render(
  <React.StrictMode>
    <UIThemeProvider
      theme={createTheme({
        colors: {
          reds,
          yellows,
          darks,
          primaries: reds,
          primary: reds[2],
        },
      })}>
      <Suspense fallback={null}>
        <Router routes={routes}>
          <App />
        </Router>
      </Suspense>
    </UIThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
