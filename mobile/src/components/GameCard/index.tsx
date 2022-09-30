import { TouchableOpacity, ImageBackground, Text, TouchableOpacityProps } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';
import { IGame } from '../../models/IGame';



interface Props extends TouchableOpacityProps {
    data: IGame
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
            source={ {uri: "http://192.168.0.105:19000/assets" + `${data.bannerUrl}`} }
            style={styles.cover}
        >

          <LinearGradient
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
          >
            <Text style={styles.name}>{data.title}</Text>
            <Text style={styles.ads}>{data.numberAds} anúncios</Text>
          </LinearGradient>

        </ImageBackground>

    </TouchableOpacity>
  );
}