import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));

class BlogInput extends Component {
    render() {
        const classes = useStyles();
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
            </form>
        );
    }
}

export default BlogInput;
