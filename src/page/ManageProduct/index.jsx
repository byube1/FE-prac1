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
import { fetchProduct } from "../../redux/action/productAction";
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
    }
});

export default function CustomizedTables() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchProduct());
    },[]);

    const classes = useStyles();
    const rows = useSelector((state => state.productReducer.productList))


    return (

        <Container>

            <div className={classes.addpd}>
                <Link to="/addProduct">
                    <Button className={classes.customTaga} variant="contained" color="primary"> Add new product</Button>
                </Link>

            </div>




            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell >Catelogy</StyledTableCell>
                            <StyledTableCell >Date create</StyledTableCell>
                            <StyledTableCell >Price</StyledTableCell>
                            <StyledTableCell >IMG</StyledTableCell>
                            <StyledTableCell >Option</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.category}</StyledTableCell>
                                <StyledTableCell >{row.dateCreate}</StyledTableCell>
                                <StyledTableCell >{row.price}</StyledTableCell>
                                <StyledTableCell >
                                    <div className={classes.imgCover}>
                                        <img className={classes.cusImg} src={row.img} alt="" />
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell >
                                    <Link to={{pathname:"/editProduct",state:row}}>
                                        <Button className={classes.customTaga}> Edit</Button>
                                    </Link>
                                    <Link to="/listProduct">
                                        <Button className={classes.customTaga}> Delete</Button>
                                    </Link>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
