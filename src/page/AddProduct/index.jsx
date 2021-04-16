import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useForm from './useForm.js'
import { makeStyles } from '@material-ui/core/styles';
import { createProduct, updateProduct } from "../../redux/action/productAction";
import { useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications"
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

const InitialFieldValue = {
    name: "",
    price: "",
    category: "",
    dateCreate: new Date().toLocaleString(),
    img: "",
}

export default function DetailProduct({ location }) {
    const classes = useStyles();
    const dispath = useDispatch();
    const [initField, setInitFiled] = useState(location.state ? { ...location.state } : InitialFieldValue);
    const validate = (fieldValues = values) => {
        let tmp = {};
        if ('name' in fieldValues)
            tmp.name = fieldValues.name ? "" : "This field is required";
        if ('price' in fieldValues)
            tmp.price = fieldValues.price ? "" : "This field is required";
        if ('category' in fieldValues)
            tmp.category = fieldValues.category ? "" : "This field is required";
        if ('img' in fieldValues)
            tmp.img = fieldValues.img ? "" : "This field is required";

        setErrors({ ...tmp });
        if (fieldValues == values)
            return Object.values(tmp).every(x => x == "");

    }

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(initField, validate);

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {

            if (location.state) {
                dispath(updateProduct(values.id, values));
                NotificationManager.success('Edit successfully', '', 2000);
            }
            else {
                dispath(createProduct(values));
                NotificationManager.success('Create successfully', '', 2000);
                setValues({ ...initField });
            }
        }
        else {
            NotificationManager.error('Action Failed', '', 2000);
        }
    }
    return (
        <div className={classes.cover}>
            <Paper className={classes.paper} >
                <Typography variant="h2" gutterBottom>
                    Manage Product
               </Typography>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                //value={values.name}
                                onChange={handleInputChange}
                                className={classes.input}
                                required id="standard-required"
                                label="Name" variant="outlined"
                                {...(errors.name && { error: true, helperText: errors.name })}
                            />
                        </Grid>
                        <Grid item xs={12} >

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label" >Catelogy</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="category"
                                    value={values.category}
                                    onChange={handleInputChange}
                                    {...(errors.category && { error: true, helperText: errors.category })}
                                >
                                    <MenuItem value=""> </MenuItem>
                                    <MenuItem value="shoes">Shoes</MenuItem>
                                    <MenuItem value="t-shirt">T-shirt</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                name="price"
                                //value={values.price}
                                onChange={handleInputChange}
                                {...(errors.price && { error: true, helperText: errors.price })}
                                id="standard-number"
                                label="Price"
                                type="number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="img" value={values.img} onChange={handleInputChange}
                            className={classes.input}
                            required id="standard-required"
                            label="IMG" variant="outlined"
                            {...(errors.img && { error: true, helperText: errors.img })}
                        />

                    </Grid>
                    <Button type="submit" color="primary" variant="contained">Save</Button>
                </form>
            </Paper>

        </div>



    );
}