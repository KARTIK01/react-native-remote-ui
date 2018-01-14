import React from "react";
import {Button} from "react-native-material-ui";
import {View} from "react-native";
// import {FloatingActionButton, RaisedButton} from "material-ui";

// export const RemoteFlatButton = (props) => {
//     let {icon, iconColor, ...otherProps} = props;
//     icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
//     props = {icon, ...otherProps};
//     return (
//         <FlatButton {...props}/>
//     )
// };

export const RemoteRaisedButton = (props) => {
    let {icon, iconColor, label, ...otherProps} = props;
    icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
    props = {icon, ...otherProps};
    return (
        <View>
            <Button text={label} {...otherProps}/>
        </View>
    )
};
//
// export const RemoteFloatingActionButton = (props) => {
//     let {icon, iconColor, ...otherProps} = props;
//     icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
//     props = {icon, ...otherProps};
//     return (
//         <FloatingActionButton {...props}>
//             <i className="material-icons" style={{color: iconColor}}>{icon}</i>
//         </FloatingActionButton>
//     )
// };
//
// export const RemoteIconButton = (props) => {
//     let {icon, iconColor, ...otherProps} = props;
//     icon = icon && <i className="material-icons" style={{color: iconColor}}>{icon}</i>;
//     props = {icon, ...otherProps};
//     return (
//         <i className="material-icons" style={{color: iconColor}} {...props}>{icon}</i>
//     )
// };
