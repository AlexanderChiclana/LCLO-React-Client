import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'


const appJsx = (
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
