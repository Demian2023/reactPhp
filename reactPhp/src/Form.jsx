import { useState } from 'react';
import PropTypes from 'prop-types';
import './estilos/App.css';

export const Form = ({ enviarNombre })=> {
  const [texto, setTexto] = useState("");
  const [mensajeError, setMensajeError] = useState([]);
  

  const inputChange = (e) => {
    setTexto(e.target.value)
  }

  const envio = (e) =>{
    e.preventDefault();
    if (texto.trim() !== "") {
      enviarNombre(texto);
      setMensajeError("")
    } else {
      setMensajeError(<>Por favor,<br />Completa el campo.</>);
    }
    setTexto("");
  }

  return (
    <form onSubmit={envio}>
      <div>
        <label htmlFor="name">Nombre:</label>
      </div>
      {mensajeError && <div style={{ color: 'red' }}>{mensajeError}</div>}
      <input type="text" name="name" id="name" value={texto} onChange={inputChange}/>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

Form.propTypes = {
  enviarNombre: PropTypes.func,
};
