import { dbData } from "../../configs/request";
const ROOT_URL = "https://localhost:44322/api/order/";



export const createOrder = (data) => {
    dbData(ROOT_URL).createData(data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
}