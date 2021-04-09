import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    card: {
        width: "285px",
        border: "1px solid #e5e5e5",
        position: "relative",
        transition: "all 0.4s",
        '&:hover': {
            boxShadow: "0 5px 20px 0 rgb(195 195 195 / 60%)",
        }        
    },
    imgProductBox: {
        position: "relative"

    },
    imgProduct: {
        width: "100%",
        display: "block"
    },
    contentProduct: {
        backgroundColor: "#fff",
        padding: "26px 10px 28px 10px",
        borderTop: "1px solid #e5e5e5",
    },
    titleProduct: {
        fontWeight: "400",
        textTransform: "uppercase",
        fontSize: "16px",
        margin: "0px",


    },
    price: {
        color: "#d26b31",
        fontWeight: "700",
        fontSize: "16px",
        margin: "10px 0 25px 0",
    },
    cusTaga: {
        textDecoration: "none",
        color: "black",
        transition: "all 0.4s",
        '&:hover': {
            color: "#87b106"
        }
    },
    addToCartBox: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    addToCart: {
        width: "40px",
        height: "40px",
        backgroundColor: "#87b106",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        transition: "all 0.5s",
        '&:hover': {
            backgroundColor: "#d26b31"
        }
    },
    buttomGroup: {
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        bottom: "0",
        left: "15px",
        opacity:"1",
        transition: "all 0.5s",
    },
    iconBox: {
        width: "36px",
        height: "36px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: " 18px",
        lineHeight: "38px",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#555555",
        margin: "0px 2px",
        transition: "all 0.5s",
        '&:hover':{
            backgroundColor: "#87b106",
        }
    },
    hiddenIconBox:{
        width: "0px",
        height: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: " 18px",
        lineHeight: "38px",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#555555",
        margin: "0px 2px",
        opacity:"0",
        transition: "all 0.5s",

    },
    discount: {
        position: "absolute",
        top: "-5px",
        left: '-5px',

    },
    contentDiscount:{
        position: "absolute",
        top: "30px",
        transform: "rotate(-45deg)",
        color: "#fff",
        fontWeight:"400"
    }

})

export default useStyles;