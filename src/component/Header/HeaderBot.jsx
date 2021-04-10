import React from 'react'
import {
    Grid,
    Container,
    Badge
} from "@material-ui/core";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from "./useStyles";
import { Link } from 'react-router-dom';

export default function HeaderBot() {
    var classes = useStyles();
    return (
        <Container className={classes.headerBot}>
            <Grid container className={classes.itemInHeaderBot}>
                <Grid item xs={2}>
                    <div className={classes.brand}>
                        <a href="/#">
                            <img src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/logo_150x.png?v=1562839006" alt="" />
                        </a>
                    </div>
                </Grid>
                <Grid item xs={7} className={classes.pdTB10}>
                    <ul className={classes.menuArea}>
                        <Link className={classes.tagAUserInfor} to="/">
                            <li className={classes.listMenu} >
                                HOME
                            </li>
                        </Link>



                        <Link className={classes.tagAUserInfor} to="/manageProduct">
                            <li className={classes.listMenu} >
                                MANAGE PRODUCT
                            </li>
                        </Link>

                    </ul>
                </Grid>
                <Grid item xs={3} className={classes.pdTB10}>
                    <ul className={classes.headerRight}>
                        <li className={classes.listHeaderRight}>
                            <a href="/#" className={classes.customTaga} >
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon style={{ fontSize: 30 }} />
                                </Badge>
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}
