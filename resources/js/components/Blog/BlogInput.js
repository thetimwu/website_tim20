import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class BlogInput extends Component {
    render() {
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
