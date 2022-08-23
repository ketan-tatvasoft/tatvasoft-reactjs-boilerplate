// Constants
import { UPDATE_PRODUCT_BY_KEY } from '../constants';

export const updateProductByKey = (data) => {
  return {
    type: UPDATE_PRODUCT_BY_KEY,
    payload: data
  };
};

export const getProduct = (type, data) => {
  return {
    type: type,
    payload: data
  };
};
