import React from "react";
import useStyles from "./useStyles";
import HeaderTop from "./HeaderTop";
import HeaderBot from "./HeaderBot";

export default function HideAppBar(props) {
  var classes = useStyles();
  return (
    <div className={classes.mainHeader}>
      <HeaderTop/>
      <HeaderBot/>
    </div>
  );
}
