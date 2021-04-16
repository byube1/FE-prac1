import { ACTION } from "../actionType/index";



export const createProduct = (data) => dispath => {
    data = formatData(data);
    dbData(ROOT_URL).createData(data)
        .then(res => {
            dispath({
                type: ACTION.CREATE_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}