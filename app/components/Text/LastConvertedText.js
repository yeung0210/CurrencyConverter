import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConvertedText = ({ date, base, quote, conversionRate }) => (
    <Text style={styles.lastConvertedText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
);

LastConvertedText.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string, 
    conversionRate: PropTypes.number,
}

export default LastConvertedText;