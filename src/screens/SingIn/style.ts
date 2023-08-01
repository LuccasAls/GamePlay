import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,

    },
    subtitle: {
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        lineHeight: 25,
        fontFamily: theme.fonts.title500


    },

})