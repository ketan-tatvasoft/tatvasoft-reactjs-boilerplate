import { API } from './api';

// end-points
import { product } from './endPoints';

export const getProduct = () => {
  return API('GET', product.index)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const createProduct = (data) => {
  return API('POST', product.index, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const getEditProduct = (id) => {
  return API('GET', `${product.index}/${id}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateProduct = (id, data) => {
  return API('PUT', `${product.index}/${id}`, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteProduct = (id) => {
  return API('DELETE', `${product.index}/${id}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};
