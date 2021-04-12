import React, { useEffect } from 'react'
import ContainerProduct from '../../component/ContainerProduct'
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/action/productAction";


export default function Home() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchProduct());
    },[]);

    return (
        <div>
            <h1>Home</h1>
            <ContainerProduct />
        </div>
    )
}
