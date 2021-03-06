import React, { useEffect } from 'react'
import ContainerProduct from '../../component/ContainerProduct'
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/action/productAction";


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    });
    return (
        <div>
            <ContainerProduct />
        </div>
    )
}
