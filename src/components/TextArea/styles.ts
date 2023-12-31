import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.color.secondary40,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    color: theme.color.heading,
    fontSize: 13,
    marginRight: 4,
    borderColor: theme.color.secondary50,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: 'top'
  }
});