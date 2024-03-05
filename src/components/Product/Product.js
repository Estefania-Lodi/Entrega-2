import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-outline-info btn-sm custom-btn-green">
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Product;