import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

// import {HelloWordApp} from './HelloWordApp'
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

function App() {
  return <div>Hello World</div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={4} />
  </React.StrictMode>
)