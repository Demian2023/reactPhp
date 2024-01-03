import axios from "axios"
import { useState, useEffect } from 'react';

export const Lista = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Obtener datos al cargar el componente
        axios.get('http://localhost/api/api.php')
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

return (
    <ul>
        {data.map(item => (
            <li key={item.id}>
                {item.nombre}
            </li>
        ))}
      </ul>
);
}