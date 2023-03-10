import './ItemList.css'
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({productos}) => {
    return (
        <ul class="flex-card-list">
            {productos.map((producto) => (
                <Link key={producto.id} to="/item" >
                    <Item producto={producto} />
                </Link>
            ))}
        </ul>
    )
}

export default ItemList;

