import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../redux/action/shoppingCartAction';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {

        width: "40%",
        padding: " 60px 0",

        margin: "0px auto"
    },
    cover: {
        width: "100%",
        padding: "20px 0"
    },
    formControl: {
        margin: theme.spacing(1),
        width: "40%",
    },
    input: {
        width: "70% !important"
    }
}));

export default function DetailCustomer() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cart = useSelector((state => state.shoppingCartReducer.cart));
    const totalAmount = useSelector((state => state.shoppingCartReducer.totalAmount));
    const currentCustomer = {
        userName: "",
        address: "",
        phoneNumber: ""
    };
    const [customer, setCustomer] = useState(currentCustomer);
    const changeInputValue = (event) => {
        const { name, value } = event.target
        setCustomer({ ...customer, [name]: value });
        console.log(customer);
    }
    const pay = () => {
        const order = {
            userName: customer.userName,
            adress: customer.address,
            phone: customer.phoneNumber,
            total: totalAmount,
            cart: [],
        }
        cart.map( (item) => {
            order.cart.push({
                idProduct: item.productCart.id,
                productName: item.productCart.name,
                amount: item.quantity,
                price: item.productCart.price,
            })
        })
        console.log(order);
        createOrder(order);
    }
    return (
        <div className={classes.cover}>
            <Paper className={classes.paper} >
                <Typography variant="h2" gutterBottom>
                    Manage Customer
      </Typography>

                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField name="userName" onChange={changeInputValue} defaultValue={customer.userName} className={classes.input} required id="standard-required" label="UserName" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="address" onChange={changeInputValue} defaultValue={customer.address} className={classes.input} required id="standard-required" label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="phoneNumber" onChange={changeInputValue} defaultValue={customer.phoneNumber} className={classes.input} required id="standard-required" label="PhoneNumber" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Link to={{ pathname: "/manageCustomer" }}>
                        <Button onClick={pay} type="submit" color="primary" variant="contained">Pay</Button>
                    </Link>
                </form>

            </Paper>

        </div>
    );
}
