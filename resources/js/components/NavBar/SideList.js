import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import AllInclusiveRoundedIcon from "@material-ui/icons/AllInclusiveRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
}));

const SideList = props => {
    const classes = useStyles();
    const { side, toggleDrawer } = props;
    return (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <Link to="/">
                        <ListItemText primary={"Home"} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<FaceIcon />}</ListItemIcon>
                    <Link to="/blog">
                        <ListItemText primary={"Blog"} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<StorageRoundedIcon />}</ListItemIcon>
                    <Link to="/data-structure">
                        <ListItemText primary={"Data Structure"} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<AllInclusiveRoundedIcon />}</ListItemIcon>
                    <Link to="/algorithm">
                        <ListItemText primary={"Algorithm"} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<GitHubIcon />}</ListItemIcon>
                    <Link to="/programming">
                        <ListItemText primary={"Programming"} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<VideogameAssetIcon />}</ListItemIcon>
                    <Link to="/fun">
                        <ListItemText primary={"Fun"} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<BuildIcon />}</ListItemIcon>
                    <Link to="/control-panel">
                        <ListItemText primary={"Control Panel"} />
                    </Link>
                </ListItem>
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SideList;
