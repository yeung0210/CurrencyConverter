import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        color: '$mainTextColor',
        fontSize: 18,
        fontWeight: '300',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
});
