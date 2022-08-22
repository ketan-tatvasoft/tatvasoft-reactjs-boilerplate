import { UPDATE_PRODUCT_BY_KEY, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from '../constants';

const initialState = {
  loading: false,
  data: [],
  errors: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_BY_KEY:
      return {
        ...state,
        [action.payload.key]: action.payload.data
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
