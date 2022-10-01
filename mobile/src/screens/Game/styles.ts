import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 40,
  },
  fillInHeaderRight: {
    width: 20,         //Size of icon chevron-thin-left
    height: 20
  },
  banner: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginBottom: 32,
    marginTop: 32
  },
  contentList: {
    marginTop: 32,
    paddingLeft: 32,
    paddingRight: 64,
  },
  empetyList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});