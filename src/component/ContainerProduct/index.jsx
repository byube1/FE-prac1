import React from 'react'
import CardProduct from '../CardProduct'
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";

export default function ContainerProduct() {
    const listProduct = useSelector((state => state.productReducer.productList))
    const renderProduct = () => listProduct.map((product, index) => (
    <Grid item xs={4}  key={index}>
        <CardProduct product={product} />
    </Grid>))
    return (
        <div>
            <Grid container>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={10}>
                    <Grid container spacing={3}>
                      {renderProduct()}
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}