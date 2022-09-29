import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { GAMES } from '../../utils/games';
import { IGame } from '../../models/IGame';

import * as gameService from '../../services/GameService'


export function Home() {

    const [games, setGames] = useState<IGame[]>([])


    const title = "Encontre seu duo!";
    const subtitle = "Selecione o game que deseja jogar...";

    useEffect(() => {
        loadGames();
        return () => {}
    }, [])

    async function loadGames(){
        const games = await gameService.findAll();
        setGames(games)
    }

    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />

            <Heading title={title} subtitle={subtitle}></Heading>

            <FlatList
                data={games}
                keyExtractor={(item) => `${item._id}`}
                renderItem={({ item }) => (
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