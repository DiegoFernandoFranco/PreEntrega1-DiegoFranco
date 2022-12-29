import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='carrito-container'>
            <img src={require('./img/carrito.png')} />
            <span className='carrito-items'>5</span>
        </div>
    );
};

export default CartWidget;

