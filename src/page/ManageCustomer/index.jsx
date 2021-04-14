import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
    const deleteCustomer = (cusId) => {
        axios.delete(`https://localhost:44322/api/customer/${cusId}`)
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>UserName</StyledTableCell>
                            <StyledTableCell >Password</StyledTableCell>
                            <StyledTableCell >FirstName</StyledTableCell>
                            <StyledTableCell >LastName</StyledTableCell>
                            <StyledTableCell >Email</StyledTableCell>
                            <StyledTableCell >Address</StyledTableCell>
                            <StyledTableCell >PhoneNumber</StyledTableCell>
                            <StyledTableCell >Option</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.userName}
                                </StyledTableCell>
                                <StyledTableCell >{row.password}</StyledTableCell>
                                <StyledTableCell >{row.firstName}</StyledTableCell>
                                <StyledTableCell >{row.lastName}</StyledTableCell>
                                <StyledTableCell >{row.email}</StyledTableCell>
                                <StyledTableCell >{row.address}</StyledTableCell>
                                <StyledTableCell >{row.phoneNumber}</StyledTableCell>
                                <StyledTableCell >
                                    <Link to={{ pathname: "/editCustomer", state: row }}>
                                        <Button className={classes.customTaga}> Edit</Button>
                                    </Link>
                                    <Button onClick={() => deleteCustomer(row.id)} className={classes.customTaga}> Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Link to={{ pathname: "/addCustomer"}}>
                <Button className={classes.customTaga}>Add Customer</Button>
            </Link>

        </div>
    );
}
