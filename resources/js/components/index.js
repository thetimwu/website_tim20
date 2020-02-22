import React, { Component } from "react";
import ReactDOM from "react-dom";
import WebApp from "./webApp";
import { useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#33ab9f",
            main: "#009688",
            dark: "#00695f",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        }
    }
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <WebApp />
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
