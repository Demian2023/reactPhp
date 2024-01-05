import PropTypes from 'prop-types';
import './estilos/App.css'

export const Lista = ({ data, editar, borrar }) => {

return (
    <ul>
        <div>
           {data.map(item => (
            <li key={item.id + 1}>
                {item.nombre}
                <div>
                    <button onClick={() => {
                    const updatedName = prompt('Editar nombre:', item.nombre);
                    if (updatedName !== null) {
                        editar(item.id, updatedName);
                    }
                    }}>Editar</button>
                <button onClick={()=> {
                    borrar(item.id, item.nombre)
                }}>Borrar</button>
                </div>
            </li>
        ))} 
        </div>
    </ul>
);
}

Lista.propTypes = {
    data: PropTypes.array,
    editar: PropTypes.func,
    borrar: PropTypes.func,
};