import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import useStyles from "./useStyles";
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export default function ListItemHover({isHover}) {
    const classes = useStyles();
    return (
        <div className={isHover?classes.customList:classes.hiddenCustomList}>
            <List component="nav" aria-label="secondary mailbox folders">

                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" classes={{ primary: classes.textInList }} />
                </ListItemLink>

                <Divider />

                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" classes={{ primary: classes.textInList }} />
                </ListItemLink>

                <Divider />

                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" classes={{ primary: classes.textInList }} />
                </ListItemLink>

                <Divider />

            </List>
        </div>
    );
}
