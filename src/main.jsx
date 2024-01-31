import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './Counter.jsx'
import Container from './Container.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter name="Round"/>
    <br />
    <Container />
  </React.StrictMode>,
)
