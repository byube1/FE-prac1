import {ACTION} from "../actionType/index"

let initialState = {
    customerList: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ACTION.SET_CUSTOMNER:
        return { ...state, customerList: payload };
      case ACTION.CREATE_CUSTOMER:
        return { ...state, customerList: [...state.customerList, payload] };
      case ACTION.UPDATE_CUSTOMER:
        return { ...state, customerList: state.customerList.map(cus=>cus.id === payload.id ? payload:cus)}
      case ACTION.DELETE_CUSTOMER:
        return { ...state, customerList: state.customerList.filter(cus=>cus.id!=payload)}
      default:     
        return state;
    };
}
    
export default reducer;