import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideList from "./SideList";
import LoginFormDialog from "../Login/LoginFormDialog";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log("open");
    };

    const handleClose = () => {
        setOpen(false);
        console.log("close");
    };

    const toggleDrawer = (side, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const clickHandler = () => {
        console.log("click handled");
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        fontStyle="oblique"
                    >
                        Tim Wu is busy doing nothing :-)
                    </Typography>
                    <Button color="inherit" onClick={handleClickOpen}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {/* {SideList("left")} */}
                <SideList side="left" toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>
            <LoginFormDialog handleClose={handleClose} open={open} />
        </div>
    );
};

export default NavBar;
