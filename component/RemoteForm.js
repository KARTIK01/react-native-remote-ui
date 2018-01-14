import React, {Component} from "react";
import update from "immutability-helper";
import ReactElement from "./ReactElement";

class RemoteForm extends Component {

    state = {
        formSubmitInfo: {}
    };

    handleSubmit = (event) => {
        let {webhook} = this.props;
        event && event.preventDefault();
        if (webhook) {
            let {url, method} = webhook;
            fetch(url, {method, body: JSON.stringify(this.state.formSubmitInfo)})
                .then(res => res.json())
                .then(json => {
                    console.log("responseJson => ", json);
                })
                .catch(err => console.error("API ERROR", err))
        }
    };


    inputChange = (event) => {
        let {value, name} = event.target;
        let {formSubmitInfo} = this.state;
        this.setState({formSubmitInfo: update(formSubmitInfo, {[name]: {$set: value}})});
        if (this.props.onChange)
            this.props.onChange(event);
    };

    render() {
        let {config} = this.props;
        return (
            <ReactElement config={config} onChange={this.inputChange}/>
        );
    }
}

RemoteForm
    .propTypes = {};
RemoteForm
    .defaultProps = {};

export
default
RemoteForm;
