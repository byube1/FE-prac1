import { ACTION } from "../actionType/index";
import { dbData } from "../../configs/request";

const ROOT_URL = "https://localhost:44322/api/customer/";

//const formatData = data => ({ ...data, price: parseInt(data.price ? data.price : 0) });

export const fetchCustomer = () => dispath => {
    dbData(ROOT_URL).getData()
        .then(
            res => {
                dispath({
                    type: ACTION.SET_CUSTOMNER,
                    payload: res.data
                })
            }
        )
        .catch(err => {
            console.log(err);
        })
}

export const createCustomer = (data) => dispath => {
    //data = formatData(data);
    dbData(ROOT_URL).createData(data)
        .then(res=>{
            dispath({
                type: ACTION.CREATE_CUSTOMER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const deleteCustomer = (id) => dispath =>{
    dbData(ROOT_URL).deleteData(id)
    .then( res =>{
        dispath({
            type:ACTION.DELETE_CUSTOMER,
            payload:id
        })
    })
    .catch(err => console.log(err));
}

export const updateCustomer = (id,data) => dispath =>{
    //data = formatData(data);
    //console.log(id);
    dbData(ROOT_URL).updateData(id,data)
    .then(res=>{
        dispath({
            type:ACTION.UPDATE_CUSTOMER,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
    
}