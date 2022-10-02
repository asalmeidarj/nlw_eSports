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
    minWidth: 312,
    minHeight: 312,
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 32,
    display:"flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionDiscord: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
    width: '100%',
  },
  discordLabel: {
    textAlign: 'center',
    color: THEME.COLORS.TEXT
  },
  discordContent: {
    textAlign: 'center',
    width: 200,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    color: THEME.COLORS.CAPTION_300,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 4
  }
});