import React from 'react'
import CardProduct from '../CardProduct'
import Grid from '@material-ui/core/Grid';
import style from './ctnproduct.module.css';

export default function ContainerProduct() {
    return (
        <div>
            <Grid container>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={10}>
                    <Grid container spacing={3}>

                        <Grid item xs={4}>
                            <CardProduct />
                        </Grid>
                        <Grid item xs={4}>
                            <CardProduct />

                        </Grid>
                        <Grid item xs={4}>
                            <CardProduct />

                        </Grid>
                        <Grid item xs={4}>
                            <CardProduct />

                        </Grid>
                    </Grid>



                </Grid>


            </Grid>

        </div>
    )
}
