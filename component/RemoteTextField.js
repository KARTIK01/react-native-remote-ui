import React from "react";
import {TextField} from "react-native-material-textfield";

export const RemoteTextField = (props) => {
    let {floatingLabelText: label, ...otherProps} = props;
    props = {label, ...otherProps};
    return (
        <TextField {...props}/>
    )
};