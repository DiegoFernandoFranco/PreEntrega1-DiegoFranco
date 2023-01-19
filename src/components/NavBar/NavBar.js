import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="menu-container">
            <Link to='/'>
                <img className="logo-nav" alt="Logo" src='./images/logo.png' />
            </Link>
            <ul>
                <li><a href="#">Todos</a></li>
                <li><a href="#">Zapatillas</a></li>
                <li><a href="#">Ojotas</a></li>
                <li><a href="#">Zapatos</a></li>                             
            </ul>
            <CartWidget />
        </div>
    );
};

export default NavBar;