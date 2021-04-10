import React from 'react'
import { Facebook, Twitter, Instagram, YouTube, AccountCircle, CreditCard, ExitToApp } from '@material-ui/icons';
import {
    Grid,
    Container,
    Tooltip
} from "@material-ui/core";

import useStyles from "./useStyles";

export default function HeaderTop() {
    var classes = useStyles();
    return (
        <Container>
            <Grid container>
                <Grid item xs={4}>
                    <div className={classes.listIcon}>
                        <Tooltip title="Facebook" arrow>
                            <a className={classes.thisIcon} href="/#"> <Facebook style={{ fontSize: 17, color:"white" }} /></a>
                        </Tooltip>
                        <Tooltip title="Twitter" arrow>
                            <a className={classes.thisIcon} href="/#"> <Twitter style={{ fontSize: 17, color:"white" }} /></a>
                        </Tooltip>
                        <Tooltip title="Instagram" arrow>
                            <a className={classes.thisIcon} href="/#"> <Instagram style={{ fontSize: 17, color:"white" }} /></a>
                        </Tooltip>
                        <Tooltip title="YouTube" arrow>
                            <a className={classes.thisIcon} href="/#"> <YouTube style={{ fontSize: 17, color:"white" }} /></a>
                        </Tooltip>
                    </div>
                </Grid>

                <Grid item xs={8}>
                    <div className="crrency"></div>
                    <ul className={classes.userInfor}>
                        <li className={classes.itemUserInfor}> <a className={classes.customTaga} href="/#"><AccountCircle style={{ fontSize: 17 }} /> My account</a></li>
                        <li className={classes.itemUserInfor}> <a className={classes.customTaga} href="/#"><CreditCard style={{ fontSize: 17 }} /> Check out</a></li>
                        <li className={classes.itemUserInfor}> <a className={classes.customTaga} href="/#"><ExitToApp style={{ fontSize: 17 }} />Login</a></li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}
