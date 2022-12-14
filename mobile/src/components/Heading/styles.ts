import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { THEME } from '../../theme';
import { Background } from '../Background';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT,
  },
  titleCenter: {
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_400
  },
});