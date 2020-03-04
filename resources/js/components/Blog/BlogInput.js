import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    margin: {
        margin: theme.spacing(1),
        width: "25%",
        justifyContent: "baseline",
        alignItems: "space-evenly"
    },
    select: {
        desplay: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        "& item": {
            flexShrink: 1
        }
    }
}));

function BlogInput() {
    const classes = useStyles();
    const [category, setCategory] = React.useState("");
    const handleChange = event => {
        setCategory(event.target.value);
    };
    return (
        <Container component="main" maxWidth="md" autoComplete="off">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <DescriptionIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Post
                </Typography>
                <FormControl className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="title"
                        label="Title"
                        name="title"
                        autoFocus
                    />
                    <TextareaAutosize
                        aria-label="Post"
                        rowsMin={5}
                        placeholder="Post Body"
                    />
                    <div className={classes.select}>
                        <FormControl className={classes.margin}>
                            <InputLabel id="demo-simple-select-helper-label">
                                Category
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={category}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>
                                Some important helper text
                            </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel id="demo-simple-select-helper-label">
                                Sub Category
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={category}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>
                                Some important helper text
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <TextField
                        className={classes.margin}
                        margin="normal"
                        id="other"
                        label="Other Category"
                        name="other"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
                    </Button>
                    <Grid container>
                        <Grid item md>
                            <Link href="#" variant="body2">
                                Cancel
                            </Link>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                </FormControl>
            </div>
        </Container>
    );
}

export default BlogInput;
