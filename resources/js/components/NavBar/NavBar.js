import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { logout_success } from "../store/action/authActions";

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
    };

    const handleClose = () => {
        setOpen(false);
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

    const isLogin = useSelector(state => state.authReducer.accessToken);
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    useEffect(() => {
        isLogin && setOpen(false);
    }, [isLogin]);

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
                    {isLogin ? (
                        <Button
                            color="inherit"
                            onClick={() => dispatch(logout_success(user.id))}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}
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
