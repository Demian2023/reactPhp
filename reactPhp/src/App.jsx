import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from './Form.jsx'
import { Lista } from './Lista.jsx'
import './estilos/App.css'

export const App = () => {

    const [nombres, setNombres] = useState([]);

    useEffect(() => {
        // Obtener datos al cargar el componente
        axios.get('http://localhost/api/api.php')
        .then(response => setNombres(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, [nombres]);

    const enviarNombre = (name) => {
        // agregar nombre
        axios.post('http://localhost/api/api.php', { nombre: name })
        .then(() => {
            // Actualizar la lista después de agregar
            axios.get('http://localhost/api/api.php')
            .then(response => setNombres([...nombres, response.data]))
            .catch(error => console.error('Error fetching data:', error));
        })
        .catch(error => console.error('Error adding data:', error));
    }

    const editar = (id, newName) => {
        // Actualizar un dato existente
        axios.put('http://localhost/api/api.php', { id, nombre: newName })
          .then(() => {
            // Actualizar la lista después de la actualización
            axios.get('http://localhost/api/api.php')
              .then(response => setNombres(response.data))
              .catch(error => console.error('Error fetching data:', error));
          })
          .catch(error => console.error('Error updating data:', error));
      };

      const borrar = (id, nombre) => {
        // Mostrar cuadro de diálogo para confirmar la eliminación
        const confirmarBorrado = window.confirm(`¿Seguro que quieres borrar a ${nombre}?`);
      
        if (confirmarBorrado) {
          // Si el usuario hace clic en "Aceptar", proceder con la eliminación
          axios.delete('http://localhost/api/api.php', { data: { id } })
            .then(() => {
              // Actualizar la lista después de la eliminación
              axios.get('http://localhost/api/api.php')
                .then(response => setNombres(response.data))
                .catch(error => console.error('Error fetching data:', error));
            })
            .catch(error => console.error('Error deleting data:', error));
        } else {
          // Si el usuario hace clic en "Cancelar", no hacer nada
          console.log('Operación de borrado cancelada.');
        }
      };
      

return (
    <>
        <div className="contenedor">
            <Form enviarNombre={enviarNombre}/>
            <Lista data={nombres} editar={editar} borrar={borrar}/> 
        </div>
    </>
);
}
