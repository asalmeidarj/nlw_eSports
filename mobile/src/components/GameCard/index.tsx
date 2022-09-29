import { TouchableOpacity, ImageBackground, ImageSourcePropType, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';


export interface GameCardProps {
  _id: string;
  bannerUrl: string;
  title: string;
  numberAds: number;
}


interface Props {
    data: GameCardProps
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