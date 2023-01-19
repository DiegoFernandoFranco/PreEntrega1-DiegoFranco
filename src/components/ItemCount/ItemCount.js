import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const stock = 5;
    const onAdd = () => {
        if (stock === contador) {
            console.log('No hay mas stock')
            return;
        }
        setContador(contador + 1)
    }
    const quitar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }   else {
            console.log('El Contador no puede bajar de 0')
            }
    }
    return (
        <div className='contador'>
            <div className='controles'>
                <button onClick={() => quitar ()}>-</button>
                <h3>{contador}</h3>
                <button onClick={onAdd}>+</button>
            </div>
            <>
            <button>Agregar al Carrito</button>
            </>
        </div>
    )
}

export default ItemCount;