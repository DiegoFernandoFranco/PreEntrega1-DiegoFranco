import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="menu-container">
            <img src={require('./img/logo.png')} />
            <ul>
                <li><a href="#">Menu Link 1</a></li>
                <li><a href="#">Menu Link 2</a></li>
                <li><a href="#">Menu Link 3</a></li>
                <li><a href="#">Menu Link 4</a></li>                             
            </ul>
            <CartWidget />
        </div>
    );
};

export default NavBar;