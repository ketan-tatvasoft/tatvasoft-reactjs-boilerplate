import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Services
import { createProduct } from '../../../services/product';

// CSS
import './styles.css';

function Create() {
  /****** STATES ******/
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: ''
  });

  /****** EVENT HANDLING ******/
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    await createProduct(newProduct)
      .then((response) => {
        if (response.status === 201) {
          alert('New Product Created');
          navigate('/crud');
        }
      })
      .catch((error) => {
        console.log('### Error : ', error);
      });
  };

  return (
    <>
      <h1>Create New Product</h1>
      <br />
      <div className="new-product">
        <label htmlFor="name">Product Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          className="input-text mt-5"
          onChange={handleInputChange}
          value={newProduct.name}
        />
        <br />
        <br />
        <label htmlFor="name">Quantity</label>
        <br />
        <input
          id="quantity"
          name="quantity"
          type="text"
          className="input-text mt-5"
          onChange={handleInputChange}
          value={newProduct.quantity}
        />

        <br />
        <br />
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
        <Link to="/crud" className="btn ml-5">
          Cancel
        </Link>
      </div>
    </>
  );
}

export default Create;