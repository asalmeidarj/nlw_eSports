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
        fetch('http://192.168.0.105:8080/games')
            .then(res => res.json())
            .then(doc => doc.data)
            .then(item => setGames(item))
    }, [])

    async function loadGames() {
        let res = await gameService.findAll();
        setGames(res)
    }

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
                renderItem={({ item }) => (
                    <GameCard
                        data={item}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
            />
            <Heading title="GAMES" subtitle={"" + games[0].title}></Heading>

        </View>
    );
}