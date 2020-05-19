import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build(
    {
        $primaryBlue: '#4F6D7A',
        $mainTextColor: '#4169E1'
    }
);

export default () => <Home />;