import { Text, TextProps, View, ViewProps } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { THEME } from '../../../theme';

import { styles } from './styles';

interface Props {
    label?: string,
    content?: string,
    colorContent?: string,
}

export function DuoInfo({label, content, colorContent = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        <Text 
            style={[styles.content, {color: colorContent}]}
            numberOfLines={1}
        >
            {content}
        </Text>
    </View>
  );
}