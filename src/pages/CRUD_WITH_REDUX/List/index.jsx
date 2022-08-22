import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Constants
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from '../../../redux/constants';

// Redux-Actions
import { updateProductByKey, getProduct as getProductAction } from '../../../redux/actions/product';

// Services
import { getProduct as productService, deleteProduct } from '../../../services/product';

// Constants
import { PRIVATE_ROUTES } from '../../../constants/routes';
import { LOADING, NO_DATA_FOUND } from '../../../constants/general';

function List() {
  /****** STATES ******/
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => {
    const { loading, data, errors } = state.product;
    return {
      loading,
      products: data,
      errors
    };
  });

  /****** EVENT HANDLING ******/
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    dispatch(
      updateProductByKey({
        key: 'loading',
        data: true
      })
    );
    await productService()
      .then((response) => {
        if (response.data) {
          dispatch(getProductAction(GET_PRODUCT_SUCCESS, response.data));
        }
      })
      .catch((error) => {
        dispatch(getProductAction(GET_PRODUCT_FAIL, error));
      });
  };

  const handleDelete = async (product) => {
    const confirmDelete = confirm('Are you sure to Delete?');
    if (confirmDelete) {
      await deleteProduct(product.id)
        .then((response) => {
          if (response.data) {
            const updatedProducts = products.filter((p) => p.id !== product.id);
            dispatch(getProductAction(GET_PRODUCT_SUCCESS, updatedProducts));
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
          <Link to={PRIVATE_ROUTES.CRUD_WITH_REDUX.CREATE} className="btn btn-success mb-10 mt-10">
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
                        to={`${PRIVATE_ROUTES.CRUD_WITH_REDUX.INDEX}/edit/${product.id}`}
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
          ) : loading ? (
            <div className="no-data-found">
              <p>{LOADING}</p>
            </div>
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
