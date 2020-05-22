import React from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Styles from './styles';

const Container = ({ children }) => (
    <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.container}>
            {children}
        </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
);

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;
