import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build(
    {
        $backgroundColor: '#4F6D7A',
        $mainTextColor: '#E0FFFF'
    }
);

export default () => <Home />;