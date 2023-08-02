import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.color.heading,

  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    borderColor: theme.color.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 24,
    overflow: 'hidden',
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image:{
    width: 64,
    height: 68,
    backgroundColor: theme.color.secondary70,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,

  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 18,
    color: theme.color.heading,
    fontFamily: theme.fonts.text500

  },
  caracteresLimit: {
    color: theme.color.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,

}
});