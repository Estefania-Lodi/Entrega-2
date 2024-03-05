import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../CartContext';
import './ProductDetail.css';
import productsData from '../ProductsData';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const getProductById = (productId) => {
    return productsData.find((product) => product.id.toString() === productId);
  };

  const product = getProductById(id);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div className="container mt-4">
      {product ? (
        <div className="product-container">
          <div className="product-image">
            <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} className="img-fluid" />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
            <p>{product.longDescription}</p>
            <p>Precio: ${product.price}</p>
            {/* Aplicar clases de estilo a los botones */}
            <button onClick={handleAddToCart} className="btn btn-outline-info btn-sm custom-btn-green">
              Agregar al carrito
            </button>
            <Link to="/" className="btn btn-outline-info btn-sm custom-btn-green mt-2">
              Volver al inicio
            </Link>
          </div>
        </div>
      ) : (
        <p>El producto no está disponible</p>
      )}
    </div>
  );
};

export default ProductDetail;
