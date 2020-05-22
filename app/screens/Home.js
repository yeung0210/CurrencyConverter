import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container'
import { Logo } from '../components/Logo/';
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';


class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log('press base');
    }
    handlePressQuoteCurrency = () => {
        console.log('press quote');
    }
    handleTextChanged = () => {
        console.log('text changed');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton 
                onPress={this.handlePressBaseCurrency} 
                buttonText={TEMP_BASE_CURRENCY} 
                defaultValue={TEMP_BASE_PRICE}
                keyboardType="numeric" 
                onChangeText={this.handleTextChanged}
                />
                <InputWithButton 
                onPress={this.handlePressQuoteCurrency} 
                buttonText={TEMP_QUOTE_CURRENCY}  
                editable={false}
                value={TEMP_QUOTE_PRICE}
                />
            </Container>
        );
    }
}

export default Home;