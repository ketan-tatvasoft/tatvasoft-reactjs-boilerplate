import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Services
import { getEditProduct, updateProduct } from '../../../services/product';

// Constants
import { PRIVATE_ROUTES } from '../../../constants/routes';

// CSS
import './styles.css';

function Edit() {
  /****** STATES ******/
  const { id } = useParams();
  const navigate = useNavigate();
  const [editProductRecord, setEditProductRecord] = useState({});

  /****** EVENT HANDLING ******/
  useEffect(() => {
    editProduct();
  }, []);

  const editProduct = async () => {
    await getEditProduct(id)
      .then((response) => {
        if (response.status === 200) {
          setEditProductRecord(response.data);
        }
      })
      .catch((error) => {
        console.log('### Error : ', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProductRecord({
      ...editProductRecord,
      [name]: value
    });
  };

  const handleUpdateProduct = async () => {
    await updateProduct(id, editProductRecord)
      .then((response) => {
        if (response.status === 200) {
          alert('Product Updated Successfully');
          navigate(PRIVATE_ROUTES.CRUD.INDEX);
        }
      })
      .catch((error) => {
        console.log('### Error : ', error);
      });
  };

  return (
    <>
      <h1>Edit Product</h1>
      <br />
      <div className="edit-product">
        <label htmlFor="name">Product Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          className="input-text mt-5"
          onChange={handleInputChange}
          value={editProductRecord?.name || ''}
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
          value={editProductRecord?.quantity || ''}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-success" onClick={handleUpdateProduct}>
          Submit
        </button>
        <Link to={PRIVATE_ROUTES.CRUD.INDEX} className="btn ml-5">
          Cancel
        </Link>
      </div>
    </>
  );
}

export default Edit;
