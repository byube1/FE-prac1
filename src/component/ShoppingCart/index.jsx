import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ACTION } from "../../redux/actionType";
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
    imgCover: {
        width: "20%"
    },
    cusImg: {
        width: "100%"
    },
    addpd: {
        display: "flex",
        justifyContent: "flex-start",
        margin: "20px 0"
    },
    customTaga: {
        textDecoration: "none",
    }
});

export default function CustomizedTables() {

    const cart = useSelector((state => state.shoppingCartReducer.cart));
    let totalCartItem = useSelector((state => state.shoppingCartReducer.totalCartItem));
    let totalAmount = useSelector((state => state.shoppingCartReducer.totalAmount));
    const rows = useSelector((state => state.shoppingCartReducer.cart));
    const total = useSelector((state => state.shoppingCartReducer.totalAmount));
    const classes = useStyles();
    const dispatch = useDispatch();
    const removeCart = (id) => {
        const cloneCart = [...cart]
        const index = cloneCart.findIndex((item) => {
            return item.productCart.id === id;
        });
        console.log(index);
        console.log(id);
        if (index != -1) {
            totalAmount -= cloneCart[index].quantity * cloneCart[index].productCart.price;
            totalCartItem -= cloneCart[index].quantity;
            cloneCart.splice(index, 1);
        }
        dispatch({
            type: ACTION.DELETE_CART,
            payload: {
                cart: cloneCart,
                totalCartItem: totalCartItem,
                total: totalAmount,
            }
        })
    };

    const increaseProduct = (id) => {
        const cloneCart = [...cart];
        const index = cloneCart.findIndex((item) => {
            return item.productCart.id === id;
        });
        if (index != -1) {
            cloneCart[index].quantity++;
            totalAmount += cloneCart[index].productCart.price;
            totalCartItem++;
        }
        dispatch({
            type: ACTION.INCREASE_PRODUCT,
            payload: {
                cart: cloneCart,
                totalCartItem: totalCartItem,
                total: totalAmount,
            }
        })
    }

    const decreaseProduct = (id) => {
        const cloneCart = [...cart];
        const index = cloneCart.findIndex((item) => {
            return item.productCart.id === id;
        });
        if (index != -1) {
            if (cloneCart[index].quantity > 0) {
                cloneCart[index].quantity--;
                totalAmount -= cloneCart[index].productCart.price;
                totalCartItem--;
            }

            if (cloneCart[index].quantity === 0) {
                cloneCart.splice(index, 1);
            }

        }
        dispatch({
            type: ACTION.DECREASE_PRODUCT,
            payload: {
                cart: cloneCart,
                totalCartItem: totalCartItem,
                total: totalAmount,
            }
        })
    }
    return (
        <Container>
            <div className={classes.addpd}>
                <Link to={{pathname:"/checkOut"}}>
                    <Button className={classes.customTaga} variant="contained" color="primary"> Checkoout</Button>
                </Link>

            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell >Catelogy</StyledTableCell>
                            <StyledTableCell >Price</StyledTableCell>
                            <StyledTableCell >IMG</StyledTableCell>
                            <StyledTableCell >Quantity</StyledTableCell>
                            <StyledTableCell >Option</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.productCart.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.productCart.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.productCart.category}</StyledTableCell>
                                <StyledTableCell >{row.productCart.price}</StyledTableCell>
                                <StyledTableCell >
                                    <div className={classes.imgCover}>
                                        <img className={classes.cusImg} src={row.productCart.img} alt="" />
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell >{row.quantity}</StyledTableCell>
                                <StyledTableCell >
                                    <Button onClick={() => increaseProduct(row.productCart.id)} className={classes.customTaga} variant="outlined" color="primary">+</Button>
                                    <Button onClick={() => decreaseProduct(row.productCart.id)} className={classes.customTaga} variant="outlined" color="primary">-</Button>
                                    <Button onClick={() => removeCart(row.productCart.id)} className={classes.customTaga} variant="outlined" color="primary"> Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                    <div>Total mount: {total}</div>
                </Table>
            </TableContainer>
        </Container>
    );
}