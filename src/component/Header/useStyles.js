import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    padding: "10px 0",
    fontSize: 17,
    color: "White",
    position: "relative",
    zIndex: "99999",
    width: "100%",
    backgroundColor: "#87b106",

  },
  listIcon: {
    color: "white"
  },
  thisIcon: {
    padding: "0px 10px",
    textDecoration: "none",
  },
  userInfor: {
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
    margin: "0px"
  },
  itemUserInfor: {
    margin: "0px 20px",
  },
  tagAUserInfor: {
    textDecoration: "none",
  },
  customTaga: {
    textDecoration: "none",
    color: "White"
  },
  headerBot: {
    marginTop: "25px"

  },
  itemInHeaderBot: {
    fontSize: "17px",
    fontWeight: "700",
    textTransform: "uppercase",
    padding: "10px 0 "
  },
  brand: {


  },
  menuArea: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: "0px",

  },
  listMenu: {
    padding: "10px 20px",
    position: "relavtive",
    color:"white",
    textDecoration: "none",
    '&:hover a':{
      color:"black"
    }
  },
  headerRight: {
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
    margin: "0px",

  },
  listHeaderRight: {
    padding: "0px 20px",
    '&:hover a':{
      color:"black",
      transition:"all 0.7s",
    }
  },
  pdTB10: {
    padding: "10px 0"

  },
  customList: {
    width: '220px',
    position: "absolute",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: "black",
    top: "120px",
    fontSize: "10px",
    transition:"all 0.5s",
    opacity:"1",
    transform:"translateY(0px)",
    zIndex:"99999"
  },
  hiddenCustomList:{
    width: '220px',
    position: "absolute",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: "black",
    top: "120px",
    fontSize: "10px",
    transition:"all 0.5s",
    opacity:"0",
    visibility:"hidden",
    transform:"translateY(30px)",
    zIndex:"99999"
  },
  textInList: {
    fontSize: "14px"
  }

}));

export default useStyles;