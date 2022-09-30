import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { IGame } from '../../models/IGame';

import * as gameService from '../../services/GameService'



export function Home() {

    const [games, setGames] = useState<IGame[]>([])

    const navigation = useNavigation()

    function handleOpenGame(obj: IGame) {
        navigation.navigate('game', obj);
    }

    useEffect(() => {
        loadGames();
        return () => { }
    }, [])

    async function loadGames() {
        const games = await gameService.findAll();
        setGames(games)
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />

                <Heading 
                    title="Encontre seu duo!" 
                    subtitle="Selecione o game que deseja jogar..." 
                />

                <FlatList
                    data={games}
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={styles.contentList}
                />

            </SafeAreaView>
        </Background>
    );
}