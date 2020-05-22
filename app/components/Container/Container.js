import React from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView } from 'react-native';
import Styles from './styles';

const Container = ({ children }) => (
    <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}>
        <View style={Styles.container}>
            {children}
        </View>
    </KeyboardAvoidingView>
    
);

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;
