import React from "react";
import BasicComponents from "./demo/basic/BasicComponent";
import {ThemeProvider} from "react-native-material-ui";
import RunningForm from "./demo/form/RunningForm";

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider >
                {/*<BasicComponents />*/}
                <RunningForm />
            </ThemeProvider>
        );
    }
}