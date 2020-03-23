import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "8%"
    }
}));

const programming = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>this is programming</h1>
        </div>
    );
};

export default programming;
