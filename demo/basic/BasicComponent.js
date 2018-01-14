import React, {Component} from "react";
import basicJson from "./basic.json";
import ReactElement from "../../component/ReactElement";

class BasicComponents extends Component {
    render() {
        return (
            <ReactElement config={basicJson}/>
        );
    }
}

BasicComponents.propTypes = {};
BasicComponents.defaultProps = {};

export default BasicComponents;
