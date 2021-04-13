import { ACTION } from "../actionType/index";
import { dbData } from "../../configs/request";

const ROOT_URL = "https://localhost:44322/api/product/";

const formatData = data => ({ ...data, price: parseInt(data.price ? data.price : 0) });

export const fetchProduct = () => dispath => {
    dbData(ROOT_URL).getData()
        .then(
            res => {
                dispath({
                    type: ACTION.SET_PRODUCT,
                    payload: res.data
                })
            }
        )
        .catch(err => {
            console.log(err);
        })
}

export const createProduct = (data) => dispath => {
    data = formatData(data);
    dbData(ROOT_URL).createData(data)
        .then(res=>{
            dispath({
                type: ACTION.CREATE_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const updateProduct = (id,data) => dispath =>{
    data = formatData(data);
    console.log(id);
    dbData(ROOT_URL).updateData(id,data)
    .then(res=>{
        dispath({
            type:ACTION.UPDATE_PRODUCT,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
    
}

export const deleteProduct = (id) => dispath =>{
    dbData(ROOT_URL).deleteData(id)
    .then(res=>{
        dispath({
            type:ACTION.DELETE_PRODUCT,
            payload:id
        })
    })
    .catch(err => console.log(err));
}