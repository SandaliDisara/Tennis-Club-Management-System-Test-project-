import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../css/Wardrobe.css';

export default function Wardrobe() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', image: '/Assets/sh1.png' },
    { id: 2, name: 'Product 2', image: '/Assets/sh2.png' },
    // Add more products here
  ]);

  const [topContainer, setTopContainer] = useState([]);
  const [bottomContainer, setBottomContainer] = useState([]);

  const handleAddToContainer = (product) => {
    // Decide whether to add the product to the top or bottom container
    // You can implement your logic here based on your requirements
    const container = Math.random() < 0.5 ? 'top' : 'bottom';

    if (container === 'top') {
      setTopContainer([...topContainer, product]);
    } else {
      setBottomContainer([...bottomContainer, product]);
    }
  };

  return (
   
    <div className="app">
  <div className="left-panel">
    <div className="left-panel-content">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button onClick={() => handleAddToContainer(product)}>
              <FaPlus /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="right-panel">
        <div className="container">
          <h2>Top Container</h2>
          <div className="container-content">
            {topContainer.map((product) => (
              <div key={product.id} className="container-item">
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <h2>Bottom Container</h2>
          <div className="container-content">
            {bottomContainer.map((product) => (
              <div key={product.id} className="container-item">
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


