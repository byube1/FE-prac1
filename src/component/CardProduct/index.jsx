import React from 'react'
import { Button, Grid } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import useStyles from "./useStyles";
import hover from '../../event/hover';
import { useDispatch } from "react-redux";
import { ACTION } from "../../redux/actionType";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
export default function CardProduct({ product }) {
    const dispatch = useDispatch();
    var classes = useStyles();
    const [hoverRef, isHovered] = hover();
    const { id, name, price, img } = product;
    const cart = useSelector((state => state.shoppingCartReducer.cart));
    let totalCartItem = useSelector((state => state.shoppingCartReducer.totalCartItem));
    let totalAmount = useSelector((state => state.shoppingCartReducer.totalAmount));

    const addToCart = () => {
        const cloneCart = [...cart];
        const cartItem = {
            productCart: product,
            quantity: 1,
        };

        const index = cloneCart.findIndex((item) => {
            return item.productCart.id === product.id;
        });

        if (index === -1) {
            cloneCart.push(cartItem);
            totalAmount += cartItem.productCart.price;
        }
        else {
            cloneCart[index].quantity++;
            totalAmount += cloneCart[index].productCart.price;
        }
        totalCartItem = totalCartItem + 1;
        console.log(cloneCart);
        dispatch({
            type: ACTION.ADD_CART,
            payload: {
                cart: cloneCart,
                totalCartItem: totalCartItem,
                total: totalAmount,
            }
        })
    };

    return (
        <div className={classes.card} ref={hoverRef}>
            <div className={classes.imgProductBox} >
                <a href="/#">
                    <img className={classes.imgProduct} src={img} alt="" />
                </a>
                <div className={classes.buttomGroup}>
                    <a href="/#">
                        <div className={isHovered ? classes.iconBox : classes.hiddenIconBox}>
                            <FavoriteBorderIcon />
                        </div>
                    </a>
                    <a href="/#">
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
                            <h6 className={classes.titleProduct} > <a className={classes.cusTaga} href="/#">{name}</a> </h6>
                            <p className={classes.price}>{price}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.addToCartBox}>
                                <Link to={{ pathname: "/shoppingCart"}} className={classes.customTaga}>
                                    <Button onClick={addToCart} className={classes.addToCart}>
                                        <AddShoppingCartIcon />
                                    </Button>
                                </Link>

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