import { View, Image, FlatList} from 'react-native';

import { styles } from './styles';

import  logoImg  from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { GAMES } from '../../utils/games';

export function Home() {

    const title = "Encontre seu duo!";
    const subtitle = "Selecione o game que deseja jogar...";

    return (
        <View style={styles.container}>
            <Image 
                source={logoImg}
                style={styles.logo}
            /> 

            <Heading title={title} subtitle={subtitle}></Heading>

            <FlatList 
                data={GAMES}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) =>(
                    <GameCard
                        data={item}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
            />

        </View>
    );
}