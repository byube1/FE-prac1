import React from 'react'
import { Grid } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import useStyles from "./useStyles";
import hover from '../../event/hover'
export default function CardProduct() {
    var classes = useStyles();
    const [hoverRef, isHovered] = hover();
    return (
        <div className={classes.card} ref={hoverRef}>
            <div className={classes.imgProductBox} >
                <a href="">
                    <img className={classes.imgProduct} src="//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896" alt="" />
                </a>
                <div className={classes.buttomGroup}>
                    <a href="">
                        <div className={isHovered ? classes.iconBox : classes.hiddenIconBox}>
                            <FavoriteBorderIcon />
                        </div>
                    </a>
                    <a href="">
                        <div className={isHovered ? classes.iconBox : classes.hiddenIconBox}>
                            <VisibilityOutlinedIcon />
                        </div>
                    </a>
                </div>
                <div className={classes.discount}>
                    <img src="https://cdn.shopify.com/s/files/1/0248/5823/0872/t/3/assets/download.png" alt="" />
                    <div className={classes.contentDiscount}>
                        <span>-50% OFF</span>
                    </div>
                </div>
            </div>
            <div className={classes.contentProduct}>
                <div className="productCaption">

                    <Grid container>
                        <Grid item xs={9}>
                            <h6 className={classes.titleProduct} > <a className={classes.cusTaga} href="">Quickiin Mens shoes</a> </h6>
                            <p className={classes.price}>$999 </p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.addToCartBox}>
                                <a href="">
                                    <div className={classes.addToCart}>
                                        <AddShoppingCartIcon />
                                    </div>

                                </a>

                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="productRating">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />

                </div>
            </div>

        </div>
    )
}
