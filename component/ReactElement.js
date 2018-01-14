import React, {Component} from "react";
import {REMOTE_COMPONENT} from "./Constants";
import {RemoteRaisedButton} from "./RemoteButton";
import {Text, View} from "react-native";
import {RemoteTextField} from "./RemoteTextField";
import RemoteForm from "./RemoteForm";

class ReactElement extends Component {

    getRemoteUI = (config, index = 0) => {
        let returnObj = undefined;
        if (config instanceof Array) {
            returnObj = config.map((listItem, index) => this.getRemoteUI(listItem, index));
            return returnObj; // Process if item is not an Array
        } else if (config) {
            let passingProps = {
                key: index, ...config,
                onChange: this.props.onChange
            };
            switch (config.type) {
                // case REMOTE_COMPONENT.APP_BAR :
                //     return <RemoteAppBar {...passingProps}/>;
                // case REMOTE_COMPONENT.BUTTON_FLAT :
                //     return <RemoteFlatButton {...passingProps}/>;
                case REMOTE_COMPONENT.BUTTON_RAISED :
                    return <RemoteRaisedButton {...passingProps}/>;
                // case REMOTE_COMPONENT.BUTTON_ICON :
                //     return <RemoteIconButton {...passingProps}/>;
                // case REMOTE_COMPONENT.BUTTON_FAB :
                //     return <RemoteFloatingActionButton {...passingProps}/>;


                case REMOTE_COMPONENT.TEXT :
                    return <RemoteTextField {...passingProps}/>;
                //
                //
                case REMOTE_COMPONENT.FORM :
                    return <RemoteForm {...passingProps}/>;
                default :
                    <Text>DEFAULT</Text>
            }
        }
    };

    render() {
        let {config = []} = this.props;
        return (
            <View>{this.getRemoteUI(config, 0)}</View>
        );
    }
}

ReactElement.propTypes = {};
ReactElement.defaultProps = {};

export default ReactElement;
