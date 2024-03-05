import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaHome, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ borderRadius: '15px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}> {/* Agrega boxShadow y border-radius aquí */}
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand" style={{ color: 'rgb(34, 80, 53)' }}>
          <FaHome style={{ color: 'rgb(34, 80, 53)', fontSize: '2rem' }} />
          <img src={`${process.env.PUBLIC_URL}/img/logo.jpeg`} alt="20" height="70" />
        </Link>
        <div className="navbar-nav">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link" style={{ color: 'rgb(34, 80, 53)', fontSize: '1.2rem' }}> {/* Ajuste del tamaño de fuente aquí */}
              {link.label}
            </Link>
          ))}
        </div>
        <div className="position-relative">
          <Link to="/cart" className="text-dark me-2 position-relative nav-link" style={{ color: 'rgb(34, 80, 53)' }}>
            <FaShoppingCart style={{ color: 'rgb(34, 80, 53)', fontSize: '2rem', backgroundColor: 'transparent' }} />
            {cartItemsCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItemsCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { to: '/cremas', label: 'Cremas' },
  { to: '/maquillajes', label: 'Maquillajes' },
  { to: '/exfoliantes', label: 'Exfoliantes' },
];

export default NavBar;
