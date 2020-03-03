import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const styles = theme => ({
    root: {
        marginTop: "8%",
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    breadCrumb: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

class BlogList extends Component {
    state = {
        blogs: [],
        isLoading: false,
        error: ""
    };

    handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <NavBar />

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Breadcrumbs
                                aria-label="breadcrumb"
                                className={classes.breadCrumb}
                            >
                                <Link
                                    color="inherit"
                                    href="/"
                                    onClick={this.handleClick}
                                >
                                    Material-UI
                                </Link>
                                <Link
                                    color="inherit"
                                    href="/getting-started/installation/"
                                    onClick={this.handleClick}
                                >
                                    Core
                                </Link>
                                <Link
                                    color="textPrimary"
                                    href="/components/breadcrumbs/"
                                    onClick={this.handleClick}
                                    aria-current="page"
                                >
                                    Breadcrumb
                                </Link>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(BlogList);
