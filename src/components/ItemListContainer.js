import './ItemListContainer.css';
import loguito from './img/logo.png'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
            <img src={loguito} className="App-logo loguito" alt="logo" />
            <h1 style={{color: "black"}}>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;