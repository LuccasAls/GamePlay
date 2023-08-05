import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {},
  banner: {
    width: '100%',
    height: 234,
  
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.color.heading
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.color.heading,
    lineHeight: 21,
  },
  bannerContent: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    marginBottom: 30,

  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
});