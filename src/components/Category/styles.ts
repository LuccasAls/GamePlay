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
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 11,
        height: 11,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-end',
        borderRadius: 3,

    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 13,
        height: 13,
        backgroundColor: theme.color.secondary100,
        alignSelf: 'flex-end',
        borderColor: theme.color.secondary60,
        borderWidth: 2,
        borderRadius: 3,

    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.color.heading,
        fontSize: 15,
        marginTop: 15,
    }
})

