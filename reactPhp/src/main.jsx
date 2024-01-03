import React from 'react'
import ReactDOM from 'react-dom/client'
import { Form } from './Form.jsx'
import { Lista } from './Lista.jsx'
import "./estilos/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <Lista />
  </React.StrictMode>,
)
