const Item = ({producto}) => {
    return (
        <div>
            <li key={producto.id}>
                {producto.image}
                <h2>{producto.title}</h2>
                <h3>Precio: ${producto.price}</h3>
                <h3>Categoria: {producto.category}</h3>
                <h3>Stock: {producto.stock}</h3>
                
            </li>
        </div>
    )
};

export default Item