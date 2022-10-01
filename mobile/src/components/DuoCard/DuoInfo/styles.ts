import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 16,
      },
      label: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.CAPTION_300,
      },
      content: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        paddingTop: 4,
      },
});