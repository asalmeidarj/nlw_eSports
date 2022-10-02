import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  containerClosed: {
    display: 'none'
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'black',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    opacity: 0.8,
  },
  content: {
    backgroundColor: THEME.COLORS.SHAPE,
    minWidth: 200,
    minHeight: 200,
  }
});