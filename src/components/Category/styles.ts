import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 106,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 4, 
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.color.secondary50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7,
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3,

    },
    check: {
        width: 13,
        height: 13,
        backgroundColor: theme.color.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.color.secondary60,
        borderWidth: 2,
        borderRadius: 3,

    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.color.heading,
        fontSize: 15,
    }
})

