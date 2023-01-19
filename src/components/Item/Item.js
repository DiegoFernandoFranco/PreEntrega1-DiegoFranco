import './Item.css'

const Item = ({producto}) => {
    return (
        // <div>
        //     <li key={producto.id}>
        //         {producto.image}
        //         <h2>{producto.title}</h2>
        //         <h3>Precio: ${producto.price}</h3>
        //         <h3>Categoria: {producto.category}</h3>
        //         <h3>Stock: {producto.stock}</h3>
                
        //     </li>
        // </div>
        <div>
            <li key={producto.id} class="flex-card-listitem">
            <div class="flex-card">
              <div class="flex-card-image">
                {producto.pictureUrl}
              </div>
              <div class="flex-card-content">
                <h3 class="flex-card-heading">{producto.title}</h3>
                <p>Categoria: {producto.category}</p>
                <p>Stock: {producto.stock}</p>
                <h4 class="flex-card-heading">Precio: ${producto.price}</h4>
                <a href="#" class="flex-card-button">Ver Detalle</a>
              </div>
            </div>
          </li>
        </div>
    )
};

export default Item