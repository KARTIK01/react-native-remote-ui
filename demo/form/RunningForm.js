import React, {Component} from "react";
import form1 from "./form1.json";
import ReactElement from "../../component/ReactElement";

class RunningForm extends Component {

    render() {
        return (
            <ReactElement config={form1}/>
        );
    }
}

RunningForm.propTypes = {};
RunningForm.defaultProps = {};

export default RunningForm;
