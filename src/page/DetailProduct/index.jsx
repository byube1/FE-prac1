import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
       
        width: "40%",
        padding:" 60px 0",

        margin: "0px auto"
    },
    cover: {
        width: "100%",
        padding:"20px 0"
    },
    formControl: {
        margin: theme.spacing(1),
        width: "40%",
    },
    input:{
        width:"70% !important"
    }
}));

export default function DetailProduct() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={classes.cover}>
            <Paper className={classes.paper} >
            <Typography variant="h2" gutterBottom>
       Manage Product
      </Typography>

                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField className={classes.input} required id="standard-required" label="Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} justify="flex-start" alignItems="flex-start">

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Catelogy</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>

                        <TextField  className={classes.input} required id="standard-required" label="Date Create" type="Date" defaultValue="2021-05-24" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            className={classes.input}
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
                            <TextField className={classes.input} required id="standard-required" label="IMG" variant="outlined" />
                        </Grid>
                    <Button type="submit"  color="primary" variant="contained">Save</Button>

                </form>

            </Paper>

        </div>



    );
}
