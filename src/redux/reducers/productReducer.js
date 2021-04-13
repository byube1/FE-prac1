import {ACTION} from "../actionType/index"

let initialState = {
    productList: [],
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ACTION.SET_PRODUCT:
        return { ...state, productList: payload };
      case ACTION.CREATE_PRODUCT:
        return { ...state, productList: [...state.productList,payload] };
      case ACTION.UPDATE_PRODUCT:
        return { ...state, productList: state.productList.map(pd=>pd.id === payload.id ? payload:pd)}
      case ACTION.DELETE_PRODUCT:
        return { ...state, productList: state.productList.filter(pd=>pd.id!=payload)}
      default:     
        return state;
    }
  };

  export default reducer;