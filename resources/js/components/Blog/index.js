import React from "react";
import BlogList from "./BlogList";
import NavBar from "../NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import Typography from "@material-ui/core/Typography";
import { Switch, Route, Link, useRouteMatch, Router } from "react-router-dom";
import BlogInput from "./BlogInput";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "8%"
    },
    breadCrumbs: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    link: {
        display: "flex"
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20
    }
}));

const index = () => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    return (
        <React.Fragment>
            <NavBar />
            <div className={classes.root}>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    className={classes.breadCrumbs}
                >
                    <Typography color="textPrimary" className={classes.link}>
                        <GrainIcon className={classes.icon} />
                        <Link to="/blog">Blogs</Link>
                    </Typography>
                    <Typography color="textPrimary" className={classes.link}>
                        <WhatshotIcon className={classes.icon} />
                        <Link to={`${url}/create`}>Create Blog</Link>
                    </Typography>
                </Breadcrumbs>
            </div>
            <Container maxWidth="md">
                <Switch>
                    <Route exact path={path}>
                        <BlogList />
                    </Route>
                    <Route path={`${path}/create`}>
                        <BlogInput />
                    </Route>
                </Switch>
            </Container>
        </React.Fragment>
    );
};

export default index;
