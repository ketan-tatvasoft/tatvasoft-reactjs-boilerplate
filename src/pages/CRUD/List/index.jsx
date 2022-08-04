import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Services
import { getProduct as getProductService, deleteProduct } from '../../../services/product';

// Constants
import { PRIVATE_ROUTES } from '../../../constants/routes';
import { NO_DATA_FOUND } from '../../../constants/general';

// CSS
import './styles.css';

function List() {
  /****** STATES ******/
  const [products, setProducts] = useState([]);

  /****** EVENT HANDLING ******/
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await getProductService()
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log('### Error : ', error);
      });
  };

  const handleDelete = async (product) => {
    const confirmDelete = confirm('Are you sure to Delete?');
    if (confirmDelete) {
      await deleteProduct(product.id)
        .then((response) => {
          if (response.data) {
            const updatedProducts = products.filter((p) => p.id !== product.id);
            setProducts(updatedProducts);
          }
        })
        .catch((error) => {
          console.log('### Error : ', error);
        });
    }
  };

  return (
    <>
      <div className="products">
        <h1>Product CRUD</h1>
        <div className="croud-toolbar">
          <Link to="/crud/create" className="btn btn-success mb-10 mt-10">
            Create New Product
          </Link>
        </div>
        <div className="table-wrapper">
          {products.length ? (
            <table className="product-table" cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quanity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <Link
                        to={`${PRIVATE_ROUTES.CRUD.INDEX}/edit/${product.id}`}
                        className="btn btn-info mr-5">
                        Edit
                      </Link>
                      <button className="btn btn-danger" onClick={() => handleDelete(product)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-data-found">
              <p>{NO_DATA_FOUND}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default List;
