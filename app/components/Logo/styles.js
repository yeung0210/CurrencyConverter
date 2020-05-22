import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create(
    {
        container: {
            alignItems: 'center',
            marginVertical: 30,
        },
        containerImage: {
            alignItems: 'center',
            justifyContent: 'center',
            width: imageWidth,
            height: imageWidth,
        },
        text: {
            fontSize: 28,
            fontWeight: '600',
            alignItems: 'center',
            marginTop: 30,
            color: '$mainTextColor',
        }
    }
);

