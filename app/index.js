import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build(
    {
        $mainColor: '#4F6D7A',
        $mainTextColor: '#E0FFFF',
        $white: '#FFFFFF',
        $textInput: '#FAFAFA',
        $borderColor: '#E2E2E2',
        $lightGrey: '#E0E0E0',
    }
);

export default () => <Home />;