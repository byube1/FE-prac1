import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

export default function DetailCustomer({ location }) {
    const classes = useStyles();
    const currentCustomer = {
        userName: "", 
        password: "", 
        firstName: "", 
        lastName: "", 
        email: "", 
        address: "", 
        phoneNumber: ""};
    const [customer, setCustomer] = useState(currentCustomer);
    const changeInputValue = (event) => {
        const { name, value } = event.target
        setCustomer({ ...customer, [name]: value });
        console.log(customer);
    }
    const addCustomer = () => {
        axios.post(`https://localhost:44322/api/customer/`, customer)
            .then(res => {
                console.log(res.config.data);
            })
            .catch(error => console.log(error));
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
                            <TextField name="password" onChange={changeInputValue} defaultValue={customer.password} className={classes.input} required id="standard-required" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="firstName" onChange={changeInputValue} defaultValue={customer.firstName} className={classes.input} required id="standard-required" label="FirstName" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="lastName" onChange={changeInputValue} defaultValue={customer.lastName} className={classes.input} required id="standard-required" label="LastName" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="email" onChange={changeInputValue} defaultValue={customer.email} className={classes.input} required id="standard-required" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="address" onChange={changeInputValue} defaultValue={customer.address} className={classes.input} required id="standard-required" label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="phoneNumber" onChange={changeInputValue} defaultValue={customer.phoneNumber} className={classes.input} required id="standard-required" label="PhoneNumber" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Link to={{ pathname: "/manageCustomer" }}>
                        <Button onClick={addCustomer} type="submit" color="primary" variant="contained">Save</Button>
                    </Link>
                </form>

            </Paper>

        </div>
    );
}
