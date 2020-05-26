import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container'
import { Logo } from '../components/Logo/';
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button';
import { LastConvertedText } from '../components/Text'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

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
    handleSwapCurrency = () => {
        console.log('press swap currencey');
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
                <LastConvertedText 
                date={TEMP_CONVERSION_DATE}
                base={TEMP_BASE_CURRENCY}
                quote={TEMP_QUOTE_CURRENCY}
                conversionRate={TEMP_CONVERSION_RATE}
                 />
                <ClearButton text='Reverse Currency' onPress={this.handleSwapCurrency} />
            </Container>
        );
    }
}

export default Home;