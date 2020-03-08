import React, { Component } from "react";
import ReactDOM from "react-dom";
import WebApp from "./webApp";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
    },
    status: {
        danger: "red"
    }
    // typography: {
    //     fontFamily: [
    //         "-apple-system",
    //         "BlinkMacSystemFont",
    //         '"Segoe UI"',
    //         "Roboto",
    //         '"Helvetica Neue"',
    //         "Arial",
    //         "sans-serif",
    //         '"Apple Color Emoji"',
    //         '"Segoe UI Emoji"',
    //         '"Segoe UI Symbol"'
    //     ].join(",")
    // }
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <WebApp />
                </ThemeProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
