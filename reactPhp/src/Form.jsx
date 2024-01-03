import { useState, useEffect } from 'react';
import './estilos/App.css';
import axios from "axios"

export const Form = ()=> {
  const [texto, setTexto] = useState("");
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    // Obtener datos al cargar el componente
    axios.get('http://localhost/api/api.php')
      .then(response => setNombres(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const inputChange = (e) => {
    setTexto(e.target.value)
  }

  const enviarNombre = (e) => {
    e.preventDefault();
    console.log(texto);
    axios.post('http://localhost/api/api.php', { nombre: texto })
      .then(() => {
        // Actualizar la lista después de agregar
        axios.get('http://localhost/api/api.php')
          .then(response => setNombres(response.data))
          .catch(error => console.error('Error fetching data:', error));
      })
      .catch(error => console.error('Error adding data:', error));
      setTexto("");
  }


  return (
    <form onSubmit={enviarNombre}>
      <div>
        <label htmlFor="name">Nombre:</label>
      </div>
      <input type="text" name="name" id="name" value={texto} required onChange={inputChange}/>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

