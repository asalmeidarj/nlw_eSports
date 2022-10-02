import { View, ViewProps, Text } from 'react-native'

import { styles } from './styles'

interface Props extends ViewProps {
    title: string;
    subtitle: string;
    alingTitle?: "center"
}

export function Heading({ title, subtitle, alingTitle = undefined, ...rest }: Props) {
    return (
        <View>
            <View style={alingTitle == 'center' && styles.titleCenter}>
                <Text style={styles.title} {...rest}>
                    {title}
                </Text>
            </View>
            <Text style={styles.subtitle} {...rest}>
                {subtitle}
            </Text>
        </View>
    )
}
