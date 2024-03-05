import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import Product from './Product/Product';
import productsData from './ProductsData';

const ItemListContainer = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState('default');
  const [currentCategory, setCurrentCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const category = getCategoryFromPath(path);
    setCurrentCategory(category);
  }, [location.pathname]);

  useEffect(() => {
    const sorted = getSortedProducts(productsData, currentCategory, sortType);
    setSortedProducts(sorted);
  }, [currentCategory, sortType]);

  const getCategoryFromPath = (path) => {
    if (path.includes('cremas')) return 'cremas';
    if (path.includes('maquillajes')) return 'maquillajes';
    if (path.includes('exfoliantes')) return 'exfoliantes';
    return 'all';
  };

  const getSortedProducts = (products, category, sortType) => {
    let sorted = [...products];

    if (category !== 'all') {
      sorted = sorted.filter((product) => product.category === category);
    }

    if (sortType === 'asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  };

  const handleSortTypeChange = (type) => {
    setSortType(type);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Lista de productos</h2>
          <div className="d-flex justify-content-center mb-3">
            <button onClick={() => handleSortTypeChange('asc')} className="btn btn-outline-info me-2 custom-btn-green">
              Ordenar por precio menor <BsArrowDown />
            </button>
            <button onClick={() => handleSortTypeChange('desc')} className="btn btn-outline-info custom-btn-green">
              Ordenar por precio mayor <BsArrowUp />
            </button>
          </div>
          <div className="row">
            {sortedProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
