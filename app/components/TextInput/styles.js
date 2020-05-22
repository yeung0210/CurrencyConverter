import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4; 

export default EStyleSheet.create(
    {
        $buttonBackgroundColorBase: '$mainColor',
        $buttonBackgroundColorModifier: 1,

        container: {
            backgroundColor: '$textInput',
            width: '90%',
            height: INPUT_HEIGHT,
            borderRadius: BORDER_RADIUS,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        containerDisabled: {
            backgroundColor: '$lightGrey',
        },
        buttonContainer: {
            height: INPUT_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$white',
            borderTopLeftRadius: BORDER_RADIUS,
            borderBottomLeftRadius: BORDER_RADIUS,
        },
        buttonText: {
            fontWeight: '600',
            fontSize: 20,
            paddingHorizontal: 16,
            color: '$mainColor',
        },
        border: {
            height: INPUT_HEIGHT,
            width: StyleSheet.hairlineWidth,
            color: '$mainColor',
        },
        input: {
            height: INPUT_HEIGHT,
            flex: 1,
            fontSize: 18,
            paddingHorizontal: 8,
            color: '$mainColor',
        },
    }
);