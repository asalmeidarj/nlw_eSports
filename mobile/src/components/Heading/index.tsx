import { View, ViewProps, Text } from 'react-native'

import { styles } from './styles'

interface Props  extends ViewProps{
    title: string;
    subtitle: string;
}

export function Heading({ title, subtitle, ...rest }: Props) {
    return (
        <View>
            <Text style={styles.title} {...rest}>
                {title}
            </Text>

            <Text style={styles.subtitle} {...rest}>
                {subtitle}
            </Text>
        </View>
    )
}
