import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;

    const containerStyle = [styles.container];
    const underlayColor = color(styles.$buttonBackgroundColorBase).lighten(styles.$buttonBackgroundColorModifier);

    if (editable == false) {
        containerStyle.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyle}>
            <TouchableHighlight underlayColor={underlayColor} onPress={onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}></View>
            <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} />
        </View>
    );
};

InputWithButton.prototype = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
}

export default InputWithButton;
